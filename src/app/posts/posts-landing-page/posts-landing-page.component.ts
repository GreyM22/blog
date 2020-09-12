import { Component, OnInit } from '@angular/core';
// import * from '../../../assets/images'
@Component({
  selector: 'app-posts',
  templateUrl: './posts-landing-page.component.html',
  styleUrls: ['./posts-landing-page.component.sass']
})
export class PostLandingPageComponent implements OnInit {

  featuredPosts = [
    {
      category: "History",
      title: "The Birth And Death Of Privacy: 3,000 Years of History Told Through 46 Images ",
      rating: "123",
      author: "Melany Kuve",
      imagePath: "../../../assets/images/historyPost.jpeg"
    },
    {
      category: "Biology",
      title: "The Biology of Mindfulness and Mindlessness — A Neuroscientist’s Perspective",
      rating: "123",
      author: "Melany Kuve",
      imagePath: "../../../assets/images/biologyPost.jpeg"
    },
    {
      category: "Math",
      title: "Deep Dive into Math Behind Deep Networks ",
      rating: "123",
      author: "Melany Kuve",
      imagePath: "../../../assets/images/mathPost.jpeg"
    },
    {
      category: "Geography",
      title: "Celestial Geography",
      rating: "123",
      author: "Melany Kuve",
      imagePath: "../../../assets/images/geographyPost.jpeg"
    }
  ]

  newPosts = [
    {
      category: "Biology",
      title: "The Biology of Mindfulness and Mindlessness — A Neuroscientist’s Perspective ",
      rating: "123",
      author: "Melany Kuve",
      imagePath: "../../../assets/images/kameleon.jpeg"
    },
    {
      category: "Physics",
      title: " What Quantum Physics Can Tell You About Your Identity",
      rating: "123",
      author: "Melany Kuve",
      imagePath: "../../../assets/images/atom.jpeg"
    },
    {
      category: "History",
      title: "The Birth And Death Of Privacy: 3,000 Years of History Told Through 46 Images",
      rating: "123",
      author: "Melany Kuve",
      imagePath: "../../../assets/images/historybook.jpeg"
    },
  ]

  popularPosts = [
    {
      category: "History",
      title: "The Birth And Death Of Privacy: 3,000 Years of History Told Through 46 Images",
      rating: "123",
      author: "Melany Kuve",
      imagePath: "../../../assets/images/painting.jpeg"
    },
    {
      category: "Math",
      title: "Deep Dive into Math Behind Deep Networks",
      rating: "123",
      author: "Melany Kuve",
      imagePath: "../../../assets/images/study.jpeg"
    },
    {
      category: "Chemistry",
      title: "Essential Math for Data Science",
      rating: "123",
      author: "Melany Kuve",
      imagePath: "../../../assets/images/chemistry.jpeg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
