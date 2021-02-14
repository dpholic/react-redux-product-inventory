import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AddProductForm from './AddProductForm';
import * as actionCreator from '../../actions/productActions';

import { Prompt } from 'react-router'


class AddProductPage extends React.Component {

  render() {  
    console.log("AddProductPage => render() run first then componentdidmount()")

    if(localStorage.getItem("isLogin")=="false")
    return <Redirect to="/login" />;
    

    return(
    <>

   
    <AddProductForm onSave={this.props.saveProduct}  
    />
     </>);
  }
}

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

function mapDispatchToProps(dispatch) {
  console.log("Dispatch method");
  return {

    saveProduct: (product) => dispatch(actionCreator.addProduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddProductPage));
