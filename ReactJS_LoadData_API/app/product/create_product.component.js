window.CreateProductComponent = React.createClass({
  // initialize values
  getInitialState: function() {
    return {
      categories: [],
      selectedCategoryId: -1,
      name: '',
      description: '',
      price: '',
      successCreation: null
    };
  },

  // on mount, get all categories and store them in component state
  componentDidMount: function() {
    this.serverRequest = $.get("http://localhost/canhphong.github.io/ReactJS_API/api/category/read.php", function(categories) {
      this.setState({categories: categories.records});
    }.bind(this));

    $('.page-header h1').text('Create product');
  },

  // on unmount, stop getting categories in case the request is still loading
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  // handle category change
  onCategoryChange: function(e) {
    this.setState({selectedCategoryId: e.target.value});
  },

  // handle change name
  onNameChange: function(e) {
    this.setState({name: e.target.value});
  }

  // handle description name
  onDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  }

  // handle price name
  onPriceChange: function(e) {
    this.setState({price: e.target.value});
  }

  // handle save button clicked
  onSave: function(e) {
    // data tin the form
    var form_data = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      category_id: this.state.selectedCategoryId
    };

    // submit form data to api
    $.ajax({
      url: "http://localhost/canhphong.github.io/ReactJS_API/api/product/create.php", type: "POST", contentType: 'application/json', data: JSON.stringify(form_data);
      success: function(response) {
        // api message
        this.setState({successCreation: response['message']});

        // empty form
        this.setState({name: ""});
        this.setState({description: ""});
        this.setState({price: ""});
        this.setState({selectedCategoryId: -1});
      }.bind(this),
      error: function(xhr, resp, text) {
        console.log(xhr, resp, text);
      }
    });
    e.preventDefault();
  },

  // render component here
  render: function() {
    // make categories as option for the select tag
    var categoriesOptions = this.state.categories.map(function(category) {
      return (<option key="category.id" value="category.id">{category.name}</option>);
    });

    /*
  -tell the user if a product was create
  -tell the user if unable to create product
  -button to go back to products list
  -form to create a product
*/

    return (<div>
      {
        this.state.successCreation == "Product was created."
          ? <div className='alert alert-success'>
              Product was saved.
            </div>
          : null
      }
      {
        this.state.successCreation == "Unable to create product."
          ? <div className='alert alert-danger'>
              Unable to save product, please ty again.
            </div>
          : null
      }

      <a href="#"
        onClick={() => this.props.changeAppMode('read')}
        className='btn btn-primary margin-bottom-1em'>
        Read Products
      </a>

      <form onSubmit={this.onSave}>
        <table className='table table-bordered table-hover'>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input type="text"
                className='form-control'
                value={this.state.name}
                required
                onChange={this.onNameChange} />
              </td>
            </tr>

            <tr>
              <td>Description</td>
              <td>
                <input type="text"
                className='form-control'
                value={this.state.description}
                required
                onChange={this.onDescriptionChange} />
              </td>
            </tr>

            <tr>
              <td>Price</td>
              <td>
                <input type="text"
                className='form-control'
                value={this.state.description}
                required
                onChange={this.onDescriptionChange} />
              </td>
            </tr>

          </tbody>
        </table>
      </form>


    </div>)

  }

});
