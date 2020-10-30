// Vector函式
const Vector = function(x,y){
  this.x = x
  this.y = y
}
 // 移動
Vector.prototype.move = function(v){
  this.x += v.x
  this.y += v.y
  return this
}
// 加法
Vector.prototype.add = function(v){
  return new Vector(this.x + v.x, this.y + v.y)
}
// 減法
Vector.prototype.sub = function(v){
  return new Vector(this.x - v.x, this.y - v.y)
}
// 乘法
Vector.prototype.mul = function(s){
  return new Vector(this.x * s, this.y * s)
}
// 長度
Vector.prototype.length = function(){
  return Math.sqrt(this.x * this.x + this.y * this.y)
}

// 設定值
Vector.prototype.set = function(x,y){
  this.x = x
  this.y = y
  return this
}

// 比較
Vector.prototype.equal = function(v){
  return (this.x == v.x) && (this.y == v.y)
}

// 複製
Vector.prototype.clone = function(){
  return new Vector(this.x,this.y)
}
