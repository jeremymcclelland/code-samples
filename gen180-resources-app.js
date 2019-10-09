(function() {
  "use strict";

  function StateResourcesFilters(props) {
    function updateSelectedState(evt) {
      props.updateFormState("selectedState", evt.target.value);
    }

    return (
      <form action="" id="directory-filters">
        <div className="group select">
          <select
            name="resource_state"
            id="resource-state"
            value={props.selectedState}
            onChange={updateSelectedState}
          >
            <option value="0">Select your state</option>
            {props.stateList.map(function(stateName) {
              return (
                <option value={stateName.state_id} key={stateName.state_id}>
                  {stateName.state_title}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    );
  }

  function StateResource(props) {
    return <li id={props.stateResource.id} className="nationalResource">
        <a href={props.stateResource.link} target="_blank"><h6><div dangerouslySetInnerHTML={{__html: props.stateResource.title}} /></h6><p>{props.stateResource.blurb}</p></a>
        </li>;;
  }

  function StateResourcesList(props) {
    return (
      <div className="results">
        <ul>
        {props.stateResourcesList.map(function(stateResource) {
          return (
            <StateResource
              key={stateResource.id}
              stateResource={stateResource}
            />
          );
        })}
        </ul>
      </div>
    );
  }


  function dynamicSort(property) {
      var sortOrder = 1;

      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }

      return function (a,b) {
          if(sortOrder == -1){
              return b[property].localeCompare(a[property]);
          }else{
              return a[property].localeCompare(b[property]);
          }        
      }
  }


  class StateResources extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        selectedState: "",
        stateResources: [],
        newStateList: []
      };

      //Need this in order to have this.setState work when called from child component
      this.updateFormState = this.updateFormState.bind(this);
    }

    componentDidMount() {
      fetch("/data/national-resource-data.json")
        .then(data => data.json())
        .then(data => {
          const filteredData = data
            .filter(eachItem => {
              return eachItem["state_id"] != null;
            })
            .filter(eachItem => {
              return eachItem["state_id"] != "2";
            });

          //create new object array with just tab data
          const newStateList = filteredData.map(state => ({
            state_title: state.state,
            state_id: state.state_id
          }));

          //remove duplicates from state data
          const uniqueStates = Array.from(
            new Set(newStateList.map(a => a.state_id))
          ).map(state_id => {
            return newStateList.find(a => a.state_id === state_id);
          });



          this.setState({
            stateResources: filteredData,
            newStateList: uniqueStates.sort(dynamicSort("state_title"))
          });
        });
    }

    //handler function to pass down as prop to update state

    updateFormState(name, val) {
      this.setState({
        [name]: val
      });
    }

    render() {
      let filteredResources = this.state.stateResources;
      filteredResources = filteredResources.filter(eachItem => {
        return eachItem["state_id"] == this.state.selectedState;
      });

      return (
        <div className="state-resources-directory">
          <StateResourcesFilters
            stateList={this.state.newStateList}
            selectedState={this.state.selectedState}
            updateFormState={this.updateFormState}
          />

          <div className="list">
            <StateResourcesList stateResourcesList={filteredResources} />
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(
    <StateResources />,
    document.getElementById("state-resources-root")
  );
})();