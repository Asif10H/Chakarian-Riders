import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';
 
export class MapContainer extends Component {
  render() {

    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={(props, marker, e) => this.onMarkerClick(props, marker, e)}
                name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAMvwfpb9SWb4-okqok74qn5E3gmlErE5I")
})(MapContainer)