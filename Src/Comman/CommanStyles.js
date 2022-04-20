import {StyleSheet} from 'react-native';
import Theme from './Theme';

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  // login or signup page css
  topRowContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageHeading: {
    fontFamily: Theme.Font.Bold,
    fontSize: 48,
    paddingVertical: 20,
  },
  inputHeading: {
    color: '#222222',
    fontFamily: Theme.Font.Medium,
    paddingVertical: 15,
    top: 5,
  },
  rightSideBorder: {
    borderRightWidth: 2,
    paddingHorizontal: 5,
    borderColor: '#F81F59',
    height: 20,
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: 5,
    fontFamily: Theme.Font.Bold,
  },
  inputContainer: {
    width: '100%',
    height: 55,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#9A9FA5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  errorMessageText: {
    fontFamily: Theme.Font.Bold,
    color: '#F81F59',
    paddingVertical: 5,
  },
  ///// Dashboard page card style
});
export default Styles;
