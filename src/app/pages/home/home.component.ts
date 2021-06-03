import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counterImage1;
  counterImage2;
  counterImage3;
  counterImage4;
  counterImage5;
  image1Clicked = false;
  image2Clicked = false;
  image3Clicked = false;
  image4Clicked = false;
  image5Clicked = false;
  constructor() { }

  ngOnInit(): void {
    this.counterImage1 = localStorage.getItem('counterImage1')
    this.counterImage2 = localStorage.getItem('counterImage2')
    this.counterImage3 = localStorage.getItem('counterImage3')
    this.counterImage4 = localStorage.getItem('counterImage4')
    this.counterImage5 = localStorage.getItem('counterImage5')
    if (this.counterImage1 == undefined) {

      this.counterImage1 = 0

    } if (this.counterImage2 == undefined) {

      this.counterImage2 = 0

    } if (this.counterImage3 == undefined) {

      this.counterImage3 = 0

    } if (this.counterImage4 == undefined) {

      this.counterImage4 = 0

    } if (this.counterImage5 == undefined) {

      this.counterImage5 = 0
    }
  }

  likeImage(numberOfImage) {

    if (numberOfImage == 'image1') {

      this.counterImage1 = + this.counterImage1
      this.counterImage1 = this.counterImage1 + 1
      this.image1Clicked = true
      localStorage.setItem('counterImage1', this.counterImage1)

    } else if (numberOfImage == 'image2') {

      this.counterImage2 = + this.counterImage2
      this.counterImage2 = this.counterImage2 + 1
      this.image2Clicked = true
      localStorage.setItem('counterImage2', this.counterImage2)

    } else if (numberOfImage == 'image3') {

      this.counterImage3 = + this.counterImage3
      this.counterImage3 = this.counterImage3 + 1
      this.image3Clicked = true
      localStorage.setItem('counterImage3', this.counterImage3)

    } else if (numberOfImage == 'image4') {

      this.counterImage4 = + this.counterImage4
      this.counterImage4 = this.counterImage4 + 1
      this.image4Clicked = true
      localStorage.setItem('counterImage4', this.counterImage4)

    }else if (numberOfImage == 'image5'){
      this.counterImage5 = + this.counterImage5
      this.counterImage5 = this.counterImage5 + 1
      this.image5Clicked = true
      localStorage.setItem('counterImage5', this.counterImage5)
    }

    console.log(this.counterImage1)
  }
}
