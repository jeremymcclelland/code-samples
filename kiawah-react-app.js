(function() {
	"use strict";

	document.body.className += " " + "react-properties-body";

	function Filters(props) {
		function myFunction() {
			document.getElementById("myDropdown").classList.toggle("show");
			document.getElementById("js-search-bar").classList.toggle("open");
		}

		function updateFilterForm(evt) {
			props.updateFormState({ [evt.target.name]: evt.target.value });
		}

		function resetFilters(e) {
			e.preventDefault();
			props.updateFormState({
				selectedBaths: "",
				selectedBeds: "",
				selectedMaxSqFt: "",
				selectedMinSqFt: "",
				selectedPriceHigh: "",
				selectedPriceLow: "",
				selectedType: "",
				selectedView: "",
				currentPage: 1
			});
		}

		return (
			<React.Fragment>
				<div className="hot-links-wrapper wowX XfadeIn">
					<ul id="properties-menu" className="menu">
						<li className="menu-item current-menu-item">
							<a href="/properties/">Properties</a>
						</li>
						<li className="menu-item">
							<a href="/master-plans/">Master Plan</a>
						</li>
						<li className="menu-item">
							<a href="/amenities/">Amenities</a>
						</li>
						<li className="menu-item">
							<a href="/homeplans/">Home Plans</a>
						</li>
					</ul>
				</div>

				<div className="search" id="js-search-bar">
					<div
						id="inner-search"
						className={
							"inner-search-wrapper " +
							props.filterClass +
							"-view"
						}
					>
						<div className="toggle-filters-wrapper">
							<div className="input-field">
								<span onClick={myFunction} className="dropbtn">
									Filter{" "}
									<img
										id="gold-arrow"
										src="/wp-content/themes/kiawahriver/assets/svg/down_gold_arrow.svg"
									/>
								</span>
							</div>

							<div className="input-field">
								<div className="check-button sort-filter">
									<label>
										<input
											type="radio"
											className="card-checkbox"
											name="view"
											value="map view"
										/>
										<span>Sort</span>
									</label>
								</div>
							</div>
						</div>

						<div className="toggle-view-wrapper">
							<div className="input-field">
								<div className="check-button">
									<label>
										<input
											type="radio"
											className="card-checkbox"
											name="view"
											value="grid"
											onChange={updateFilterForm}
										/>
										<span>Grid</span>
									</label>
								</div>
							</div>
							<div className="input-field">
								<div className="check-button">
									<label>
										<input
											type="radio"
											className="card-checkbox"
											name="view"
											value="map"
											onChange={updateFilterForm}
										/>
										<span>Map</span>
									</label>
								</div>
							</div>
						</div>

						<div id="myDropdown" className="dropdown-content">
							<form
								id="myForm"
								className="dropdown-flex-wrap"
								autocomplete="on"
								onChange={updateFilterForm}
							>
								<span className="flex-input">
									<div className="select">
										<select
											name="selectedBeds"
											id="Beds"
											value={props.selectedBeds}
										>
											<option value="">Bedroom</option>
											{props.bedsList.map(function(
												bedValue
											) {
												if (bedValue.bedrooms != null) {
													return (
														<option
															value={
																bedValue.bedrooms
															}
															key={
																bedValue.bedrooms
															}
														>
															{bedValue.bedrooms}
														</option>
													);
												}
											})}
										</select>
									</div>
								</span>

								<span className="flex-input">
									<div className="select">
										<select
											name="selectedBaths"
											id="Baths"
											value={props.selectedBaths}
										>
											<option value="">Bathroom</option>
											{props.bathsList.map(function(
												bathValue
											) {
												if (
													bathValue.bathrooms != null
												) {
													return (
														<option
															value={
																bathValue.bathrooms
															}
															key={
																bathValue.bathrooms
															}
														>
															{
																bathValue.bathrooms
															}
														</option>
													);
												}
											})}
										</select>
									</div>
								</span>

								<span className="flex-input">
									<div className="select">
										<select
											name="selectedView"
											id="Views"
											value={props.selectedView}
										>
											<option value="">
												Property View
											</option>
											{props.viewsList.map(function(
												viewValue
											) {
												if (viewValue.view != null) {
													return (
														<option
															value={
																viewValue.view
															}
															key={viewValue.view}
														>
															{viewValue.view}
														</option>
													);
												}
											})}
										</select>
									</div>
								</span>

								<span className="flex-input">
									<div className="select">
										<select
											name="selectedType"
											id="Types"
											value={props.selectedType}
										>
											<option value="">
												Property Type
											</option>
											{props.typesList.map(function(
												typeValue
											) {
												if (typeValue.type != null) {
													return (
														<option
															value={
																typeValue.type
															}
															key={typeValue.type}
														>
															{typeValue.type}
														</option>
													);
												}
											})}
										</select>
									</div>
								</span>

								<span className="flex-input">
									<div className="select">
										<select
											name="selectedPriceLow"
											id="Price-Min"
											value={props.selectedPriceLow}
										>
											<option value="0">Price Min</option>
											<option value="500000">
												500,000
											</option>
											<option value="750000">
												750,000
											</option>
											<option value="1000000">
												1,000,000
											</option>
											<option value="1250000">
												1,250,000
											</option>
											<option value="1500000">
												1,500,000
											</option>
											<option value="1750000">
												1,750,000
											</option>
											<option value="2000000">
												2,000,000
											</option>
										</select>
									</div>
								</span>

								<span className="flex-input">
									<div className="select">
										<select
											name="selectedPriceHigh"
											id="Price-Max"
											value={props.selectedPriceHigh}
										>
											<option value="30000000000">
												Price Max
											</option>
											<option value="500000">
												500,000
											</option>
											<option value="750000">
												750,000
											</option>
											<option value="1000000">
												1,000,000
											</option>
											<option value="1250000">
												1,250,000
											</option>
											<option value="1500000">
												1,500,000
											</option>
											<option value="1750000">
												1,750,000
											</option>
											<option value="2000000">
												2,000,000
											</option>
										</select>
									</div>
								</span>

								<span className="flex-input">
									<div className="select">
										<select
											name="selectedMinSqFt"
											id="Sqft-Min"
											value={props.selectedMinSqFt}
										>
											<option value="0">Min Sq Ft</option>
											<option value="1800">1,800</option>
											<option value="2200">2,200</option>
											<option value="2600">2,600</option>
											<option value="3000">3,000</option>
											<option value="3400">3,400</option>
											<option value="3800">3,800</option>
										</select>
									</div>
								</span>

								<span className="flex-input">
									<div className="select">
										<select
											name="selectedMaxSqFt"
											id="Sqft-Max"
											value={props.selectedMaxSqFt}
										>
											<option value="1000000">
												Max Sq Ft
											</option>
											<option value="2200">2,200</option>
											<option value="2600">2,600</option>
											<option value="3000">3,000</option>
											<option value="3400">3,400</option>
											<option value="3800">3,800</option>
											<option value="4200">4,200</option>
										</select>
									</div>
								</span>

								<span className="flex-input">
									<a id="reset" onClick={resetFilters}>
										Reset
									</a>
								</span>
							</form>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}

	function Card(props) {
		return (
			<li id={props.property.data.id} className="card">
				<div className="card-inner">
					<div className="card-header">
						<a
							className="wrap-link"
							href={"/property?id=" + props.property.data.id}
							target="_blank"
						>
							<div
								className="card-image"
								style={{
									backgroundImage: `url(${props.property.media.images[0].url})`
								}}
							></div>
							<h3 className="card-title">
								{props.property.data.pba__address_pb__c}
							</h3>
							<p className="card-id">
								{props.property.data.pba__propertytype__c}
							</p>
						</a>
					</div>

					<div className="card-content">
						<ul className="item-list cf">
							<li>
								Price:{" "}
								<span className="card-price">
									$
									{props.property.data.pba__listingprice_pb__c.toLocaleString(
										navigator.language,
										{ minimumFractionDigits: 0 }
									)}
								</span>
							</li>
							{props.property.data.view__c && (
								<li>
									View:{" "}
									<span>{props.property.data.view__c}</span>
								</li>
							)}
							{props.property.data.builder_name__c && (
								<li>
									Builder:{" "}
									<span>
										{props.property.data.builder_name__c}
									</span>
								</li>
							)}

							{props.property.data.heated_square_feet__c && (
								<li>
									Heated SQ FT:{" "}
									{props.property.data.heated_square_feet__c.toLocaleString(
										navigator.language,
										{ minimumFractionDigits: 0 }
									)}
								</li>
							)}
							{props.property.data.pba__lotsize_pb__c && (
								<li>
									Lot:{" "}
									{props.property.data.pba__lotsize_pb__c}{" "}
									Acres
								</li>
							)}
							{props.property.data.pba__bedrooms_pb__c && (
								<li>
									Bedrooms:{" "}
									{props.property.data.pba__bedrooms_pb__c}
								</li>
							)}

							{props.property.data.bathrooms_us__c && (
								<li>
									Bathrooms:{" "}
									{props.property.data.bathrooms_us__c}
								</li>
							)}
						</ul>

						{props.currentView == "map" ? (
							<a
								className="view-btn"
								id={props.property.data.id}
								href="#"
								onClick={infoWindowClick}
							>
								View
							</a>
						) : (
							<a
								className="view-btn"
								target="_blank"
								href={"/property?id=" + props.property.data.id}
							>
								View
							</a>
						)}
					</div>
				</div>
			</li>
		);
	}

	function PropertyCards(props) {
		let target = document.getElementById("phantom-footer");
		return (
			<div id="properties-tile-view" className="main">
				<div className="wrapper">
					<ul id="js-cards" className="cards cf">
						{props.properties.map(function(property) {
							return (
								<Card
									key={property.data.id}
									property={property}
									currentView={props.currentView}
								/>
							);
						})}
					</ul>

					<Pagination
						currentPage={props.currentPage}
						pageNumbers={props.pageNumbers}
						handlePageNumberClick={props.handlePageNumberClick}
					/>
				</div>

				<section class="full footer">
					<div className="bottom">
						<div className="bottomInner">
							<div className="fish"><img src="/wp-content/themes/kiawahriver/assets/svg/logo1.svg"/></div>

							<div className="watermark"><img src="/wp-content/themes/kiawahriver/assets/svg/watermark1.svg"/></div>

							<a className="logo has-link" href="/">
								<img src="/wp-content/themes/kiawahriver/assets/svg/logo2.svg"/>
							</a>

							<table>
								<tr>
									<td>Life along the River</td>

									<td>
										<a href="http://kiawahriver.sdcopartners.com/contact/#google-map">kiawah river: 3883 Betsy Kerrison Parkway<br/>
										Johns Island, SC 29455</a>
									</td>

									<td>
										<a href="tel:843.973.8600">tel: 843.973.8600</a>
									</td>
								</tr>
							</table>

							<div className="subtext">
								<div>chas</div>

								<div>
									<span>
										©copyright 2018. kiawah river
										&nbsp;&nbsp;&nbsp;SITE BY
									</span>{" "}
									<a href="https://sdcopartners.com/" target="_blank">
										SDCO PARTNERS
									</a>{" "}
									&nbsp;&nbsp;&nbsp;
									<a href="/privacy-policy">Privacy Policy</a>{" "}
									&nbsp;&nbsp;&nbsp;
									<a href="/terms-and-conditions">
										Terms & Conditions
									</a>
									&nbsp;&nbsp;&nbsp;
									<a className="optanon-toggle-display">
										Cookie Settings
									</a>
								</div>

								<div>1698</div>
							</div>

							<div className="disclaimer">Obtain the Property Report required by Federal law and read it before signing anything.  No Federal agency has judged the merits or value, if any, of this property.  This material shall not constitute a valid offer in any jurisdiction where prior registration is required, but not yet fulfilled.   Equal housing opportunity.  The facilities and amenities described and depicted are proposed, but not yet constructed.  Photographs and artists’ renderings are for illustrative purposes only and are merely representative of current development plans.  Development plans, amenities, facilities, dimensions, specifications, prices and features depicted or described herein are approximate and subject to change without notice</div>
						</div>
					</div>
				</section>
			</div>
		);
	}

	function Pagination(props) {
		const renderPageNumbers = props.pageNumbers.map(number => {
			var active;
			{
				props.currentPage == number
					? (active = "active")
					: (active = "");
			}
			return (
				<li
					className={active}
					key={number}
					id={number}
					onClick={props.handlePageNumberClick}
				>
					{number}
				</li>
			);
		});

		return (
			<div id="pagination-wrapper">
				<ul id="page-numbers">{renderPageNumbers}</ul>
			</div>
		);
	}

	function MapView(props) {
		return (
			<section id="js-overview-map" class="map-view">
				<div className="flex-outer-map-wrapper">
					<div class="flex-item-wrapper flex-map-wrapper">
						<div id="js-map-search"></div>;
					</div>

					<div class="flex-item-wrapper flex-map-card-wrapper">
						<div className="email-signup">
							<p>Keep Current on the River</p>
							<p>
								<a href="#">Sign Up</a>
							</p>
						</div>

						<div id="map-cards">
							<ul id="js-map-cards" className="listings">
								{props.properties.map(function(property) {
									return (
										<Card
											key={property.data.id}
											property={property}
											currentView={props.currentView}
										/>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}

	function loadScript(url) {
		var index = window.document.getElementsByTagName("script")[0];
		var script = window.document.createElement("script");
		script.src = url;
		script.async = true;
		script.defer = true;
		script.id = "google-maps-script";
		index.parentNode.insertBefore(script, index);
	}

	// The function to trigger the marker click, 'id' is the reference index to the 'markers' array.
	function infoWindowClick(event) {
		window.google.maps.event.trigger(markers[event.target.id], "click");
		console.log("click");
	}

	class Properties extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				propertiesData: [],
				view: "grid",
				selectedBeds: "",
				selectedBaths: "",
				selectedView: "",
				selectedType: "",
				selectedPriceLow: "",
				selectedPriceHigh: "",
				selectedMinSqFt: "",
				selectedMaxSqFt: "",
				bedsList: [],
				bathsList: [],
				viewsList: [],
				typesList: [],
				currentPage: 1,
				propertiesPerPage: 6,
				loading: true
			};

			//Need this in order to have this.setState work when called from child component
			this.updateFormState = this.updateFormState.bind(this);
			this.handlePageNumberClick = this.handlePageNumberClick.bind(this);
		}

		componentDidUpdate() {
			// let target = document.getElementById('properties-tile-view');
			// $(target).animate({ scrollTop: 0 });
		}

		componentDidMount() {
			const proxyurl = "https://cors-anywhere.herokuapp.com/";
			const url =
				"https://kiawahriver.secure.force.com/pba__WebserviceListingsQuery?token=4cc88aa02b6b2912c26e6858c49e84e6148fae18&fields=pba__LotSize_pb__c;pba__ListingPrice_pb__c;Builder_Name__c;PDFURL__c;View__c;ID;name;pba__Description_pb__c;pba__Address_pb__c;pba__ListingPrice_pb__c;pba__Bedrooms_pb__c;pba__FullBathrooms_pb__c;bathrooms_us__c;pba__TotalArea_pb__c;pba__Latitude_pb__c;Heated_Square_Feet__c;pba__Longitude_pb__c;pba__PropertyType__c;pba__City_pb__c;pba__StateCode_pb__c;pba__PostalCode_pb__c;MonthlyRent__c;pba__Status__c&pba__ListingPrice_pb__c=[0;]&itemsperpage=200&format=json&pba__Status__c=Active"; // site that doesn’t send Access-Control-*

			fetch(proxyurl + url)
				.then(data => data.json())
				.then(data => {
					let bedList = data.listings.map(plan => ({
						bedrooms: plan.data.pba__bedrooms_pb__c
					}));
					//remove duplicates from state data
					bedList = Array.from(
						new Set(bedList.map(a => a.bedrooms))
					).map(bedrooms => {
						return bedList.find(a => a.bedrooms === bedrooms);
					});
					bedList = bedList.sort((a, b) =>
						a.bedrooms > b.bedrooms ? 1 : -1
					);

					let bathList = data.listings.map(plan => ({
						bathrooms: plan.data.bathrooms_us__c
					}));
					//remove duplicates from state data
					bathList = Array.from(
						new Set(bathList.map(a => a.bathrooms))
					).map(bathrooms => {
						return bathList.find(a => a.bathrooms === bathrooms);
					});
					bathList = bathList.sort((a, b) =>
						a.bathrooms > b.bathrooms ? 1 : -1
					);

					let viewList = data.listings.map(plan => ({
						view: plan.data.view__c
					}));
					//remove duplicates from state data
					viewList = Array.from(
						new Set(viewList.map(a => a.view))
					).map(view => {
						return viewList.find(a => a.view === view);
					});
					viewList = viewList.sort((a, b) =>
						a.view > b.view ? 1 : -1
					);

					let typeList = data.listings.map(plan => ({
						type: plan.data.pba__propertytype__c
					}));
					//remove duplicates from state data
					typeList = Array.from(
						new Set(typeList.map(a => a.type))
					).map(type => {
						return typeList.find(a => a.type === type);
					});
					typeList = typeList.sort((a, b) =>
						a.type > b.type ? 1 : -1
					);
					localStorage.setItem(
						"propertiesData",
						JSON.stringify(data.listings)
					);

					this.setState(
						{
							propertiesData: data.listings,
							bedsList: bedList,
							bathsList: bathList,
							viewsList: viewList,
							typesList: typeList
						},
						this.renderMap()
					);
				});
		}

		updateFormState(spec) {
			this.setState(spec);
			this.setState({
				currentPage: 1
			});
			//set time out to give map div time to load
			setTimeout(function() {
				initMap();
			}, 100);
		}

		handlePageNumberClick(event) {
			let target = document.getElementById("properties-tile-view");
			$(target).animate({ scrollTop: 0 });
			this.setState({
				currentPage: Number(event.target.id)
			});
		}

		//map logic////////////
		renderMap = () => {
			loadScript(
				"https://maps.googleapis.com/maps/api/js?key=XXX&callback=initMap"
			);
			window.initMap = this.initMap;
			this.setState({ loading: false });
		};

		initMap = () => {
			//create a map

			//conditionally add new map if js-map-search id is present
			if (document.getElementById("js-map-search")) {
				var map = new window.google.maps.Map(
					document.getElementById("js-map-search"),
					{
						center: { lat: 32.6255, lng: -80.1251 },
						zoom: 16,
						scrollwheel: false,
						disableDefaultUI: true,
						zoomControl: true
					}
				);

				var imageBounds = {
					north: 32.6284,
					south: 32.6217,
					west: -80.12467,
					east: -80.1214
				};

				var historicalOverlay = new window.google.maps.GroundOverlay(
					"/wp-content/themes/kiawahriver/assets/svg/mapoverlay.svg",
					imageBounds
				);
				historicalOverlay.setMap(map);
			}

			let filteredData = this.state.propertiesData;
			filteredData = filteredData.filter(eachItem => {
				return (
					(eachItem["data"]["pba__bedrooms_pb__c"] ==
						this.state.selectedBeds ||
						this.state.selectedBeds == "") &&
					(eachItem["data"]["bathrooms_us__c"] ==
						this.state.selectedBaths ||
						this.state.selectedBaths == "") &&
					(eachItem["data"]["view__c"] == this.state.selectedView ||
						this.state.selectedView == "") &&
					(eachItem["data"]["pba__propertytype__c"] ==
						this.state.selectedType ||
						this.state.selectedType == "") &&
					(eachItem["data"]["pba__listingprice_pb__c"] >=
						this.state.selectedPriceLow ||
						this.state.selectedPriceLow == "") &&
					(eachItem["data"]["pba__listingprice_pb__c"] <=
						this.state.selectedPriceHigh ||
						this.state.selectedPriceHigh == "") &&
					(eachItem["data"]["heated_square_feet__c"] >=
						this.state.selectedMinSqFt ||
						this.state.selectedMinSqFt == "") &&
					(eachItem["data"]["heated_square_feet__c"] <=
						this.state.selectedMaxSqFt ||
						this.state.selectedMaxSqFt == "")
				);
			});
			//create an infowindow
			var infowindow = new window.google.maps.InfoWindow();
			//display dynamic markers

			//create array of markers for map cards
			var markers = {};

			filteredData.map(myProperty => {
				if (myProperty.data.pba__latitude_pb__c != "NEEDS_GEOCODE") {
					var lat = parseFloat(myProperty.data.pba__latitude_pb__c);
					var lng = parseFloat(myProperty.data.pba__longitude_pb__c);

					var contentString = `
			          <div class="card-image-marker" style="background-image: url(${myProperty.media.images[0].url})"></div>
			          <h4>${myProperty.data.pba__address_pb__c}</h4>
			          <p>${myProperty.data.pba__propertytype__c}</p>
			          <a href="/property?id=${myProperty.data.id}" class="marker-view-btn" target="_blank">Details</a>`;

					//create a marker
					var marker = new window.google.maps.Marker({
						position: { lat: lat, lng: lng },
						map: map,
						title: "Hello World!"
					});

					//push to markers array
					markers[myProperty.data.id] = marker;

					//click on a marker
					marker.addListener("click", function() {
						//change info window content
						infowindow.setContent(contentString);
						//open an info window
						infowindow.open(map, marker);
					});
				}
			});

			//markers available to window
			window.markers = markers;
		};

		render() {
			let filteredData = this.state.propertiesData;
			filteredData = filteredData.filter(eachItem => {
				return (
					(eachItem["data"]["pba__bedrooms_pb__c"] ==
						this.state.selectedBeds ||
						this.state.selectedBeds == "") &&
					(eachItem["data"]["bathrooms_us__c"] ==
						this.state.selectedBaths ||
						this.state.selectedBaths == "") &&
					(eachItem["data"]["view__c"] == this.state.selectedView ||
						this.state.selectedView == "") &&
					(eachItem["data"]["pba__propertytype__c"] ==
						this.state.selectedType ||
						this.state.selectedType == "") &&
					(eachItem["data"]["pba__listingprice_pb__c"] >=
						this.state.selectedPriceLow ||
						this.state.selectedPriceLow == "") &&
					(eachItem["data"]["pba__listingprice_pb__c"] <=
						this.state.selectedPriceHigh ||
						this.state.selectedPriceHigh == "") &&
					(eachItem["data"]["heated_square_feet__c"] >=
						this.state.selectedMinSqFt ||
						this.state.selectedMinSqFt == "") &&
					(eachItem["data"]["heated_square_feet__c"] <=
						this.state.selectedMaxSqFt ||
						this.state.selectedMaxSqFt == "")
				);
			});

			const currentPage = this.state.currentPage;
			const propertiesPerPage = this.state.propertiesPerPage;

			// Logic for displaying current properties
			const indexOfLastProperty = currentPage * propertiesPerPage;
			const indexOfFirstProperty =
				indexOfLastProperty - propertiesPerPage;
			const currentProperties = filteredData.slice(
				indexOfFirstProperty,
				indexOfLastProperty
			);

			// Logic for displaying page numbers
			const pageNumbers = [];
			for (
				let i = 1;
				i <= Math.ceil(filteredData.length / propertiesPerPage);
				i++
			) {
				pageNumbers.push(i);
			}

			return (
				<React.Fragment>
					<Filters
						selectedBeds={this.state.selectedBeds}
						selectedBaths={this.state.selectedBaths}
						selectedView={this.state.selectedView}
						selectedType={this.state.selectedType}
						selectedPriceLow={this.state.selectedPriceLow}
						selectedPriceHigh={this.state.selectedPriceHigh}
						selectedMinSqFt={this.state.selectedMinSqFt}
						selectedMaxSqFt={this.state.selectedMaxSqFt}
						updateFormState={this.updateFormState}
						filterClass={this.state.view}
						bedsList={this.state.bedsList}
						bathsList={this.state.bathsList}
						viewsList={this.state.viewsList}
						typesList={this.state.typesList}
					/>

					{this.state.loading ? (
						<div id="loader">
							<i className="fas fa-spinner fa-pulse"></i>
						</div>
					) : (
						<React.Fragment>
							{this.state.view == "grid" ? (
								<PropertyCards
									properties={currentProperties}
									currentView={this.state.view}
									pageNumbers={pageNumbers}
									handlePageNumberClick={
										this.handlePageNumberClick
									}
									currentPage={this.state.currentPage}
								/>
							) : (
								<MapView
									properties={filteredData}
									currentView={this.state.view}
								/>
							)}
						</React.Fragment>
					)}
				</React.Fragment>
			);
		}
	}

	ReactDOM.render(<Properties />, document.getElementById("properties-root"));
})();
