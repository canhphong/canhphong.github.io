// To create a component you need to extend React.createCassl

var list;

// Components Note
var Note = React.createClass({
  render: function() {
    return <div className="div-note">
      {this.props.children}
                  </div>
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
				return <Note key={index}> {note}</Note>
			})
		}
			</div>
		);
	},

	componentDidMount(){
		$.post("/getNotes", function(data){
			this.setState();
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
