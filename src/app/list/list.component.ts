import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newItemsNumber = 0;
  loadIndex = 3;
  collapseValue = false;
  createdDate = new Date('2018-07-22T03:24:00');
  enterListTitle = "";
  enterListSubTitle = "";
  enterListDesc = "";
  todayDate = new Date();

  foodArray = [['../assets/images/moon.jpg', 'Moon', 'This article is about the Earths natural satellite - Moon.', 'The Moon is an astronomical body that orbits planet Earth and is Earths only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). The Moon is after Jupiters satellite Io the second-densest satellite in the Solar System among those whose densities are known. The Moon is thought to have formed about 4.51 billion years ago, not long after Earth. The most widely accepted explanation is that the Moon formed from the debris left over after a giant impact between Earth and a Mars-sized body called Theia.', this.createdDate],
  ['../assets/images/sun.jpg', 'Sun', 'This article is about the Sun.', 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma,[14][15] with internal convective motion that generates a magnetic field via a dynamo process.[16] It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers, i.e. 109 times that of Earth, and its mass is about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System.', this.createdDate],
  ['../assets/images/earth.jpeg', 'Earth', 'This article is about the Earth planet.', 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.', this.createdDate],
  ['../assets/images/mars.jpg', 'Mars', 'This article is about the Mars planet.', 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury.Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.', this.createdDate],
  ['../assets/images/venus.jpg', 'Venus', 'This article is about the Venus planet.', 'Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets (meaning the Sun would rise in the west and set in the east).', this.createdDate]];

  itemCount = this.foodArray.length;

  constructor() { }

  ngOnInit() {
  }

  checkLatest() {
    let elem:Element = document.getElementsByClassName("list-type")[0];
    if (this.newItemsNumber > 0) {
      for (let i=1; i<=this.newItemsNumber; i++) {
        if (this.foodArray[i-1][4] === (this.todayDate)) {
          (elem.childNodes[i] as HTMLElement).style.borderLeft = "5px solid blue";
        }
      }
    }
  }

  addItems() {
    this.enterListTitle = prompt("Enter list title");
    this.enterListSubTitle = prompt("Enter list sub-title");
    this.enterListDesc = prompt("Enter list description");
    if (this.enterListTitle !== null && this.enterListTitle !== "" && this.enterListSubTitle !== null && this.enterListSubTitle !== "" && this.enterListDesc !== null && this.enterListDesc !== "") {
      this.foodArray.splice(0, 0, ['../assets/images/placeholderImage.png', this.enterListTitle, this.enterListSubTitle, this.enterListDesc, this.todayDate]);
      this.newItemsNumber++;
    }
    this.itemCount = this.foodArray.length;
  }

  collapseList() {
    if (!this.collapseValue) {
      this.collapseValue = true;
    } else {
      this.collapseValue = false;
    }
  }

  goTo(itemTitle) {
    window.open (
      'https://en.wikipedia.org/wiki/' + itemTitle,
      '_blank'
    );
  }

  deleteItem(item) {
    for (let i=0; i<this.foodArray.length; i++) {
      if (item === this.foodArray[i]) {
        this.foodArray.splice(i, 1);
      }
    }
    this.itemCount--;
    if (this.newItemsNumber > 0) {
      for (let i=0; i<this.newItemsNumber; i++) {
        if (this.foodArray[i][4] !== this.todayDate) {
          this.newItemsNumber--;
        }
      }
    }
  }

  loadMoreItems() {
    this.loadIndex = this.foodArray.length;
  }
}
