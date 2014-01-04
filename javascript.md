#Js面向对象#

    //定义三角形
    function Rectangle(length,width){
      this.length=length;
      this.width=width;
      this.getArea=function(){
        return this.length*this.width;
      }
    }
    
    var rectl = new Rectangle(100,50);//实例化一个Retangle
    
    Rectangle.prototype.getWidth = function(){
      return this.width;
    }//动态增加一个方法getWidth
    
    function ColorRectangle(length,width,color){
      Rectangle.call(this,length,width);
      this.color = color;
      this.getColor = function(){
          return this.color;
      };
    }//定义了一个子类ColorRectangle继承Rectangle
    
    function ColorRectangle(){
    
    }
    
    ColorRectangle.prototype = new Rectangle("","");
    ColorRectangle.prototype.color = "";
    ColorRectangle.prototype.getColor = function(){
        return this.color;
    };//另一种定义ColorRectangle的方式
    
    
