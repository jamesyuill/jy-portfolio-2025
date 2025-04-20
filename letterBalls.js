import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';

export default class LetterBalls {
  constructor(width, height, canvas) {
    this.canvas = canvas;
    this.width = width;
    this.height = height - 20;
    this.radius = width / 30;
    this.margin = this.radius * 4;
    this.spacing = this.width / 11;
    this.increment = this.spacing;
    this.nameArray = ['J', 'A', 'M', 'E', 'S', 'Y', 'U', 'I', 'L', 'L'];
    this.points = [];

    for (let i = 0; i < this.nameArray.length; i++) {
      let y =
        Math.random() * (this.height - this.margin - this.margin) + this.margin;
      let x = this.increment;
      let letter = this.nameArray[i];
      this.points.push({ x, y, letter });
      this.increment += this.spacing;
    }
  }

  show() {
    this.canvas
      .append('text')
      .attr('x', 5)
      .attr('y', 20)
      .text('move the letters!')
      .attr('fill', 'hotpink');

    this.canvas
      .append('text')
      .attr('x', 10)
      .attr('y', 35)
      .style('text-orientation', 'mixed')
      .style('writing-mode', ' vertical-rl')
      .style('cursor', 'pointer')
      .text('scroll for content ----->')
      .on('mouseover', (e) => {
        d3.select(e.target).attr('fill', 'hotpink');
      })
      .on('mouseout', (e) => {
        d3.select(e.target).attr('fill', 'black');
      })
      .on('click', (e) => {
        document.location.href = '#menupage';
      });

    //plotting the shapes and lines
    for (let i = 0; i < this.points.length; i++) {
      this.canvas
        .append('text')
        .attr('id', `base-letters-${i}`)
        .attr('x', this.points[i].x)
        .attr('y', this.height)
        .text(this.points[i].letter)
        .attr(
          'font-size',
          `${this.reverseRange(this.points[i].y, 4, this.height / 2)}`
        )
        .style('text-anchor', 'middle');

      if (i < this.points.length - 1) {
        this.canvas
          .append('line')
          .attr('id', `line-${i}`)
          .attr('x1', this.points[i].x)
          .attr('y1', this.points[i].y)
          .attr('x2', this.points[i + 1].x)
          .attr('y2', this.points[i + 1].y)
          .attr('stroke', 'black')
          .attr('stroke-width', 2);
      }

      const ballGroup = this.canvas.append('g').attr('id', `group-${i}`);

      ballGroup
        .append('circle')
        .attr('id', `circle-${i}`)
        .attr('cx', this.points[i].x)
        .attr('cy', this.points[i].y)
        .attr('r', this.radius)
        .style('cursor', 'pointer');

      ballGroup
        .append('text')
        .attr('id', `text-${i}`)
        .attr('x', this.points[i].x)
        .attr('y', this.points[i].y + 3)
        .attr('stroke', 'white')
        .attr('fill', 'white')
        .style('font-size', this.radius)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .style('user-select', 'none')
        .style('cursor', 'pointer')
        .text(this.points[i].letter);

      ballGroup
        .on('mouseover', (e) => {
          d3.select(e.target.parentNode)
            .select('circle')
            .attr('fill', 'hotpink');
          d3.select(e.target.parentNode).select('text').attr('fill', 'white');
        })
        .on('mouseout', (e) => {
          d3.select(e.target.parentNode).select('circle').attr('fill', 'black');
          d3.select(e.target.parentNode).select('text').attr('fill', 'white');
        });

      ballGroup.call(
        d3
          .drag()
          .on('start', (e) => {
            //disable all pointer events
            this.canvas.selectAll('circle').style('pointer-events', 'none');
            this.canvas.selectAll('text').style('pointer-events', 'none');
            this.canvas.selectAll('line').style('pointer-events', 'none');
          })

          .on('drag', (e) => {
            //base letters update
            this.canvas
              .select(`#base-letters-${i}`)
              .attr('x', e.x)
              .attr('y', this.height)
              .attr(
                'font-size',
                `${this.reverseRange(e.y, 4, this.height / 2)}`
              );

            this.canvas
              .select(`#circle-${i}`)
              .attr('fill', 'pink')
              .attr('cx', e.x)
              .attr('cy', e.y)
              .style('pointer-events', 'auto');

            this.canvas.select(`#text-${i}`).attr('x', e.x).attr('y', e.y);

            let index =
              e.sourceEvent.target.id[e.sourceEvent.target.id.length - 1];

            if (index === '0') {
              this.canvas
                .select(`#line-${index}`)
                .attr('x1', e.x)
                .attr('y1', e.y);
            } else if (index === '9') {
              this.canvas
                .select(`#line-${index - 1}`)
                .attr('x2', e.x)
                .attr('y2', e.y);
            } else {
              this.canvas
                .select(`#line-${index - 1}`)
                .attr('x2', e.x)
                .attr('y2', e.y);

              this.canvas
                .select(`#line-${index}`)
                .attr('x1', e.x)
                .attr('y1', e.y);
            }
          })
          .on('end', (e) => {
            this.canvas.selectAll('circle').style('pointer-events', 'auto');
            this.canvas.selectAll('text').style('pointer-events', 'auto');
          })
      );
    }
  }

  update(newWidth, newHeight) {
    for (let i = 0; i < this.points.length; i++) {
      this.canvas
        .select(`#vertical-line-${i}`)
        .attr('x1', this.points[i].x)
        .attr('y1', this.points[i].y)
        .attr('x2', this.points[i].x)
        .attr(
          'y2',
          newHeight - this.reverseRange(this.points[i].y, 20, newHeight / 1.11)
        );

      this.canvas
        .select(`#base-letters-${i}`)
        .attr('x', this.points[i].x)
        .attr('y', newHeight)
        .attr(
          'font-size',
          `${this.reverseRange(this.points[i].y, 4, newHeight / 2)}`
        );

      if (i < this.points.length - 1) {
        this.canvas

          .select(`#line-${i}`)
          .attr('x1', this.points[i].x)
          .attr('y1', this.points[i].y)
          .attr('x2', this.points[i + 1].x)
          .attr('y2', this.points[i + 1].y);
      }

      const ballGroup = this.canvas.select(`#group-${i}`);

      ballGroup
        .select(`#circle-${i}`)
        .attr('cx', this.points[i].x)
        .attr('cy', this.points[i].y);

      ballGroup
        .select(`#text-${i}`)
        .attr('x', this.points[i].x)
        .attr('y', this.points[i].y + 3);
    }
  }

  reverseRange(number, min, max) {
    return max - number + min;
  }
}
