import 'package:flutter/material.dart';
void main () => runApp(MyApp());

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context ){
      
      return MaterialApp(
        title:'ListView widget',
        home:Scaffold(
          appBar:new AppBar(
            title:new Text('卡片布局'),
          ),
          body:Center(child:FirstScreen()),
        ),
      );
  }
}

class FirstScreen extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return new Scaffold(
      appBar: AppBar(title:Text('导航页面')),
      body:Center(
        child:RaisedButton(
          child:Text('查看商品详情页面',
          style:TextStyle(
            color:Colors.blue,
            fontSize:18.0,
            height:1,
            fontFamily:'Courier',
            background:new Paint()..color=Colors.yellow,
            decoration:TextDecoration.underline,
            decorationStyle:TextDecorationStyle.dashed
          )),
          onPressed: (){
            Navigator.push(context,new  MaterialPageRoute(
              builder:(context) =>new SecondScreen())
            );
          },
        )
      )
    );
  }
}

class SecondScreen extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar:AppBar(title:Text('技术胖商品详情页')),
      body:Center(child:RaisedButton(
        child:RaisedButton(
          child:Text('返回'),
          onPressed: (){
            Navigator.pop(context);
          },
        )
      ))
    );

  }
}