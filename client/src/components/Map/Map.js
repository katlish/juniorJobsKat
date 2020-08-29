import React, { Component } from "react";
import Geocode from "react-geocode";

export default class Map extends Component {
    constructor(props) {
      super(props);

      this.state = {
        MY_API: "AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk",
        address: props.address,
        center: {}
      };
      console.log("Map constructor - ", this.state.address)
    }  
  // state = {
  //       MY_API: "AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk",
  //       address: this.props.address, // externalData
  //       center: {}
  //     };
    
      // static getDerivedStateFromProps(props, state) {
      //   // Store prevId in state so we can compare when props change.
      //   // Clear out previously-loaded data (so we don't render stale stuff).
      //   if (props.center !== state.prevCenter) {
      //     return {
      //       center: null,
      //       prevCenter: props.center,
      //     };
      //   }
      //   // No state update necessary
      //   return null;
      // }
    
      componentDidMount() {
        this._loadAsyncData(this.props.address);
        console.log("Map componentDidMount - ", this.state.center)
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (this.state.center === null) {
          console.log("this.state.center === null")
          this._loadAsyncData(this.props.address);
        }
      }
    
      componentWillUnmount() {
        if (this._asyncRequest) {
          this._asyncRequest.cancel();
        }
      }

      _loadAsyncData(address) {
        this._asyncRequest = this.getCenter(address).then(
          resp => {
            this._asyncRequest = null;
            this.setState({center: resp});
            console.log("_loadAsyncData finished - center - ", resp)
          }
        );
      }

      getCenter = address => {
        Geocode.setApiKey(this.state.MY_API);
    
        return Geocode.fromAddress(address).then(
          response => response.results[0].geometry.location
        );
      };

      getMap = () => {
        if (this.state.center) {
          const _url = `https://www.google.com/maps/embed/v1/place?key=${
            this.state.MY_API
          }&q=${this.state.center.lat},${this.state.center.lng}`;
          return (
            <iframe
              id="map"
              title="map"
              frameBorder="0"
              width="92%"
              height="98%"
              scrolling="no"
              src={_url}
            />
          );
        } else {
          return <h1> Place does not found :/ </h1>;
        }
      };
    
      render() {
        if (this.state.address === 'Remote') {
          return <h1> Remote Job </h1>
        } else if (this.state.center === null) {
          return <h1> Loading... </h1>
        } else {
          return <>{this.getMap()}</>
        }
      }
    
      
}
