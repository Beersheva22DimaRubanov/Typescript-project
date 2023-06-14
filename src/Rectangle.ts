import Shape from "./Shape";

export default class Rectangle implements Shape {
    constructor(private _width: number, private _height: number){
    }
    perimeter(): number {
        return (this._height + this._width)*2;
    }
    square(): number {
        return this._height * this._width;
    }
    
    get width(){
        return this._width
    }

}