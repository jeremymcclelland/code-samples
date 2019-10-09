(function() {
	"use strict";

	function Tab(props) {
		function updateTab(evt) {
			props.updateActiveTab(evt, "pane-" + props.tab.termslug);
		}

		return (
			<button
				className={props.index == "0" ? "tablinks active" : "tablinks"}
				onClick={updateTab}
				id={"tab-" + props.tab.termslug}
			>
				{props.tab.term}
			</button>
		);
	}

	function Tabs(props) {
		return (
			<div className="tab">
				{props.tabs.map(function(tab, index) {
					return (
						<Tab
							index={index}
							key={tab.termslug}
							tab={tab}
							updateActiveTab={props.updateActiveTab}
						/>
					);
				})}
			</div>
		);
	}

	function NationalResource(props) {

		return <li id={props.resource.id} className="nationalResource">
				<a href={props.resource.link} target="_blank"><h6><div dangerouslySetInnerHTML={{__html: props.resource.title}} /></h6><p>{props.resource.blurb}</p></a>
				</li>;
	}

	function TabPane(props) {
		return (
			<div id={"pane-" + props.tab.termslug} className="tabcontent">
			<ul>
				{props.resources.map(function(resource) {
					if (resource.type_slug == props.tab.termslug) {
						return (
							<NationalResource
								key={resource.id}
							tabcontent	resource={resource}
							/>
						);
					}
				})}
			</ul>
			</div>
		);
	}

	function TabContentPanes(props) {
		return (
			<div id="tabContents">
				{props.tabPanes.map(function(tab) {
					return (
						<TabPane
							key={tab.termslug}
							tab={tab}
							resources={props.resources}
						/>
					);
  				})}
			</div>
		);
	}

	class NationalResources extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				data: [],
				tabs: []
			};

			//Need this in order to have this.setState work when called from child component
			this.updateActiveTab = this.updateActiveTab.bind(this);
		}

		componentDidMount() {
			console.log("component Mountent");

			fetch("/data/national-resource-data.json")
				.then(data => data.json())
				.then(data => {
					//filter out other states
					const filteredData = data
						.filter(eachItem => {
							return eachItem["state_id"] == "2";
						})
						.filter(eachItem => {
							return eachItem["state_id"] != null;
						});
					//create new object array with just tab data
					const tabs = filteredData.map(tab => ({
						term: tab.type,
						termslug: tab.type_slug,
						termid: tab.type_id
					}));

					//remove duplicates from tab data
					const uniqueTabs = Array.from(
						new Set(tabs.map(a => a.termid))
					).map(termid => {
						return tabs.find(a => a.termid === termid);
					});

					this.setState({ data: filteredData, tabs: uniqueTabs });
				});
		}

		updateActiveTab(evt, cityName) {
			console.log("clicked");

			var i, tabcontent, tablinks;
			tabcontent = document.getElementsByClassName("tabcontent");
			for (i = 0; i < tabcontent.length; i++) {
				tabcontent[i].style.display = "none";
			}
			tablinks = document.getElementsByClassName("tablinks");
			for (i = 0; i < tablinks.length; i++) {
				tablinks[i].className = tablinks[i].className.replace(
					" active",
					""
				);
			}
			document.getElementById(cityName).style.display = "block";
			evt.currentTarget.className += " active";
		}

		render() {
			return (
				<div id="nationalResourcesWrapper">
					<Tabs
						tabs={this.state.tabs}
						updateActiveTab={this.updateActiveTab}
					/>

					<TabContentPanes
						tabPanes={this.state.tabs}
						resources={this.state.data}
					/>
				</div>
			);
		}
	}

	ReactDOM.render(
		<NationalResources />,
		document.getElementById("national-resources-root")
	);
})();