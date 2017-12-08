// component that decides which main component to load: read or create/update
var MainApp = React.createClass({
  // initial mode is 'read' mode
  getInitialState: function() {
    return {currentMode: 'read',
            productId: null
          };
  },

  // used when use click something that changes the current mode
  changeAppMode: function(newMode, productId) {
    this.setState({currentMode: newMode});
    if (productId !== undefined) {
      this.setState({productId, productId});
    }
  },

  // render the component based on current or selected
  render: function() {
    var modeComponent = <ReadProductsComponent changeAppMode={this.changeAppMode}/>;

    switch (this.state.currentMode) {
      case 'read':
        break;
      case 'readOne':
        modeComponent = <ReadOneProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>
        break;
      case 'create':
      modeComponent = <CreateProductComponent changeAppMode={this.changeAppMode}/>
        break;
      case 'update':
      modeComponent = <UpdateProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>
        break;
      case 'delete':
      modeComponent = <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>
        break;
      default:
    }
    return modeComponent;
  }
});

// Go and render the whole React component on to the div
ReactDOM.render(
  <MainApp />,
  document.getElementById('content')
);
