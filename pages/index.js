import React, {Component} from "react"
import {Link} from "../routes"
import factory from "../ethereum/factory";
import Layout from "../components/Layout"
import {Button} from 'semantic-ui-react';
import {Table,Label,Form,Input,Divider} from 'semantic-ui-react';
import {Router} from "../routes";
import web3 from "../ethereum/web3";
import Image from "next/image";

class KaizenIndex extends Component{

static async getInitialProps(){
      //const manager=await factory.methods.getManagerAddress().call();
      //const sayi=await factory.methods.getApproversCount().call();
      //return {manager,sayi};
      let _approversCount=await factory.methods.approversCount().call();
      let _managerAddress=await factory.methods.manager().call();
      return {_approversCount,_managerAddress};
};



state={
  adres:'',
  fname:'',
  lname:'',
};
onSubmitAddApprover=async (event)=>{
  event.preventDefault();
  const accounts=await web3.eth.getAccounts();
  await factory.methods
  .addApprover(this.state.adres,this.state.fname,this.state.lname)
  .send({
    from:accounts[0]
  });
  Router.pushRoute('/');
};

state1={
  description:'',
  val:0,
};
onSubmitCreateKaizen=async (event)=>{
  event.preventDefault();
  const accounts=await web3.eth.getAccounts();
  await factory.methods
  .createKaizen(this.state1.description,this.state1.val)
  .send({
    from:accounts[0]
  });
};

state2={
  val1:0,
};
onSubmitApproveKaizen=async (event)=>{
  event.preventDefault();
  const accounts=await web3.eth.getAccounts();
  await factory.methods
  .approveKaizen(this.state2.val1)
  .send({
    from:accounts[0]
  });
};

state3={
  val2:0,
};
onSubmitPayKaizen=async (event)=>{
  event.preventDefault();
  const accounts=await web3.eth.getAccounts();
  await factory.methods
  .payKaizen(this.state3.val2)
  .send({
    from:accounts[0]
  });
};

state4={
  val3:'0x0000000000000000000000000000000000000000',
};
onSubmitRemoveApprover=async (event)=>{
  event.preventDefault();
  const accounts=await web3.eth.getAccounts();
  await factory.methods
  .removeApprover(this.state4.val3)
  .send({
    from:accounts[0]
  });
  Router.pushRoute('/');
};

render(){

  return (

<Layout>

<label><h4>Onaylayıcı Sayısı : {this.props._approversCount}</h4></label>
<p></p>
<label><h4>Yönetici ETH Adresi : {this.props._managerAddress}</h4></label>
<Divider></Divider>
    <Form onSubmit={this.onSubmitAddApprover}>
          <Form.Field>
          <label><h4>Onaylayıcı Ekle</h4></label>
          <p></p>
          <Input
          size="mini"
          label="ETH adresi"
          labelPosition="left"
          onChange={event=>
          this.setState({adres:event.target.value})} />
          <p></p>
          <Input
          size="mini"
          label="Adı"
          labelPosition="left"
          onChange={event=>
          this.setState({fname:event.target.value})} />
          <p></p>
          <Input
          size="mini"
          label="Soyadı"
          labelPosition="left"
          onChange={event=>
          this.setState({lname:event.target.value})} />
          </Form.Field>
          <Button primary size="tiny">Ekle</Button>
    </Form>

    <Divider></Divider>
        <Form onSubmit={this.onSubmitRemoveApprover}>
              <Form.Field>
              <label><h4>Onaylayıcı Sil</h4></label>
              <p></p>
              <Input
              size="mini"
              label="ETH Adresi"
              labelPosition="left"
              onChange={event=>
              this.setState({val3:event.target.value})} />

              </Form.Field>
              <Button primary size="tiny">Sil</Button>
</Form>
<Divider></Divider>
    <Form onSubmit={this.onSubmitCreateKaizen}>
          <Form.Field>
          <label><h4>Kaizen Oluştur</h4></label>
          <p></p>
          <Input
          size="mini"
          label="Tanımlama"
          labelPosition="left"
          onChange={event=>
          this.setState({description:event.target.value})} />
          <p></p>
          <Input
          size="mini"
          label="Bildirim No"
          labelPosition="left"
          onChange={event=>
          this.setState({val:event.target.value})} />
          </Form.Field>
          <Button primary size="tiny">Ekle</Button>
</Form>

<Divider></Divider>
    <Form onSubmit={this.onSubmitApproveKaizen}>
          <Form.Field>
          <label><h4>Kaizen Onayla</h4></label>
          <p></p>
          <Input
          size="mini"
          label="Bildirim No"
          labelPosition="left"
          onChange={event=>
          this.setState({val1:event.target.value})} />

          </Form.Field>
          <Button primary size="tiny">Onayla</Button>
</Form>

<Divider></Divider>
    <Form onSubmit={this.onSubmitPayKaizen}>
          <Form.Field>
          <label><h4>Ödeme Yap</h4></label>
          <p></p>
          <Input
          size="mini"
          label="Bildirim No"
          labelPosition="left"
          onChange={event=>
          this.setState({val2:event.target.value})} />

          </Form.Field>
          <Button primary size="tiny">Ödeme Yap</Button>
</Form>
<Divider></Divider>

</Layout>
      );

  }
}
export default KaizenIndex;
