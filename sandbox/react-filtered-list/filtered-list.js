var List = React.createClass({
	render: function() {
		return (
			<ul>
				{
					this.props.items.map(function (i) {
						return (<li key={i}>{i}</li>);
					})
				}
			</ul>
		);
	}
});

var FilterdList = React.createClass({
	getInitialState: function() {
		return {
		    initialItems: [
			 "Apples",
			 "Broccoli",
			 "Chicken",
			 "Duck",
			 "Eggs",
			 "Fish",
			 "Granola",
			 "Hash Browns"
			],
		   items: []
		};
	},
	componentWillMount: function() {
		this.setState({items: this.state.initialItems});
	},
	filterList: function(event) {
		var pattern = event.target.value.toLowerCase();
		var filteredList = this.state.initialItems;
		filteredList = filteredList.filter(function(i) {
			return i.toLowerCase().search(pattern) !== -1;
		});
			
		this.setState({items: filteredList});
	},
	render: function() {
		return (
			<div className="list">
				<input type="text" placehoder="Search" onChange={this.filterList}/>
				<List items={this.state.items} />
			</div>
		);
	}
});



ReactDOM.render(<FilterdList />, document.getElementById('mount-point'));
