import VJSComponent from './VJSComponent';
import asVJSComponent from './asVJSComponent';
import CustomControls from '../../components/CustomControls';

export default () => {
  VJSComponent.registerComponent('vjsCustomControls', asVJSComponent(CustomControls));
};
