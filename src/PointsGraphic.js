import {Pt, Group, Line, Create, Sound, Triangle, Const, Geom, Vector} from 'pts/dist/es5';
import {PtsCanvas} from "react-pts-canvas";


/**
 * Chart example component, which extends PtsCanvas
 */
export class PointsGraphic extends PtsCanvas {
    constructor() {
        super();
        this.pts = [];
        this.center = null;
        this.angle = null;
        this.count = null;
        this.line = null;
        this.mouse = null;
        this.r = null;
        this.colors = [
            "#FF3F8E", "#04C2C9", "#2E55C1"
        ];
    }
    
    _create() {
        this.pts = [];
        this.center = this.space.size.$divide(1.8);
        this.angle = -(window.innerWidth * 0.5);
        this.count = window.innerWidth * 0.05;
        if (this.count > 150) {
            this.count = 150;
        }
        this.line = new Group(new Pt(0, this.angle), new Pt(this.space.size.x, 0));
        this.mouse = this.center.clone();

        this.r = Math.min(this.space.size.x, this.space.size.y) * 1;
        for (let i = 0; i < this.count; i++) {
            let p = new Group( new Pt(Math.random() * this.r - Math.random() * this.r, Math.random() * this.r - Math.random() * this.r) );
            p.moveBy( this.center ).rotate2D( i * Math.PI / this.count, this.center);
            p.brightness = 0.1;
            this.pts.push( p );
        }
      
    }
    
    componentDidUpdate() {
        if (this.props.pause) {
            this.space.pause();
        } else {
            this.space.resume();
        }
    }
    
    // Override PtsCanvas' start function
    start(space, bound) {
        this._create();
    }
    
    // Override PtsCanvas' resize function
    resize() {
        this._create();
    }

    // Override PtsCanvas' animate function
    animate(time, ftime) {

        let angle = -(window.innerWidth * 0.5);
        let pt1 = new Pt(0, angle);
        let pt2 = new Pt(this.space.size.x, 0)

        let path2 = new Group(pt1, pt2)

        this.form.strokeOnly("#42e", 5).line( path2 );
  
        let i = 0;
        for (const pt of this.pts) {
            pt.rotate2D( Const.one_degree / 15, this.center);
            this.form.stroke( false ).fill( this.colors[i % 3] ).point(pt[0], 1);
      
            // get line from pt to the mouse line
            let ln = new Group(pt[0], Line.perpendicularFromPt(this.line, pt[0]));
            
            // opacity of line derived from distance to the line
            const opacity = Math.min( 0.8, 1 - Math.abs( Line.distanceFromPt(this.line, pt[0])) / this.r);
            const distFromMouse = Math.abs( Line.distanceFromPt(ln, this.space.pointer) );

            if (distFromMouse < 50) {
              if (pt.brightness < 0.3) {
                pt.brightness += 0.015
              } 
            } else {
              if (pt.brightness > 0.1) {
                  pt.brightness -= 0.01
              }
            }

            var color = "rgba(255,255,255," + pt.brightness +")"
            this.form.stroke(color, 1).fill( true ).line(ln);
            // this.form.strokeOnly(color).fill( true ).line(ln);
            i += 1
          }
        



    }
}