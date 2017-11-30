// To create a component you need to extend React.createCassl

var list;

// Components Note
var Note = React.createClass({
	save() {
		$.post('/update', {idEdit: this.props.id,noiDung: this.refs.txt.value}, function(data){
			list.setState({array: data});
			this.setState({onEdit: false});
		});
	},
	cancel() {
		this.setState({onEdit: false});
	},
	edit() {
		this.setState({onEdit: true});
	},

	getInitialState() {
		return {onEdit: false}
	},

	delete (){
		$.post("/delete", {idDelete: this.props.id}, function(data) {
			list.setState({array: data});
		});
	},

  render: function() {
  	if(this.state.onEdit) {
			return (
				<div className="div-note">
	      <input defaultValue={this.props.children} refs="txt"/>
	      <button onClick = {this.save}>Save</button>
	      <button onClick = {this.cancel}>Cancel</button>
       </div>
       )
  	} else {
  		 return (
    	<div className="div-note">
      <p>{this.props.children}</p>
      <button onClick = {this.delete}>Delete</button>
      <button onClick = {this.edit}>Edit</button>

                  </div>
            )
  				}
  			}
});

// Function ADD
function addDiv(){
	ReactDOM.render(<InputDiv/>, document.getElementById('div-add'));
}

// Components List 
var List = React.createClass({
getInitialState() {
	list = this;
	return {array: []}

},

	render: function() {
		return (
			<div className="div-list">
			<div id="div-add"></div>
			<button onClick={addDiv}> Add </button>
			{
				this.state.array.map(function(note, index) {
				return <Note key={index} id={index}> {note} </Note>
			})
		}
			</div>
		);
	},

	componentDidMount(){
		var that = this;
		$.post("/getNotes", function(data){
			that.setState({array: data});
		});
	}

});

// Components InputDiv
var InputDiv = React.createClass(
{
	send() {
			$.post("/add", {note: this.refs.txt.value}, function(data) {
				list.setState({array: data});
			});
			ReactDOM.unmountComponentAtNode(document.getElementById('div-add'));
	},

	render() {
		return <div>
			<input type="text" ref="txt" placeholder = "Enter your note!"/>
			<button onClick={this.send}> Send </button>
		</div>
	}
});

ReactDOM.render(
	<div>
		<List/>
	</div>
  ,
  document.getElementById("root")
);
