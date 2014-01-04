#JavaScript编程技巧#

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
    }
    
    
