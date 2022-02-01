import React from "react";
import "./card.css";

export class Card extends React.Component {
  render() {
    return (
      <div>
        <div class="block relative h-48 rounded overflow-hidden" >
          <img
            alt={this.props.brand + " " + this.props.model}
            class="object-cover object-center w-full h-full block placeholder mt-2"
            src={this.props.img}
          />
        </div>
        <div class="mt-4 ">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
            {this.props.brand}
          </h3>
          <h2 class="text-light-900 title-font  text-lg font-medium">
            {this.props.model}
          </h2>
          <p class="mt-1 mb-2">Rs {this.props.price}</p>
        </div>
      </div>
    );
  }
}
