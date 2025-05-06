import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
   
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({ 
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule,SlickCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // @ViewChild('bg_video') bg_video!: ElementRef<HTMLVideoElement>;

  // ngAfterViewInit(): void {
  //   const video = this.bg_video.nativeElement;
  //   video.muted = true; // Essential for autoplay
  //   video.play().then(() => {
  //     console.log('Video playing instantly!');
  //   }).catch(error => {
  //     console.error('Video failed to play:', error);
  //   });
  // }

 
  enquiry_form: any
  constructor(private fb: FormBuilder) {
    this.enquiry_form = this.fb.group({
      course_name: ['', [Validators.required]],
      category: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]],
      message: ['', [Validators.required]]
    }) as FormGroup

  }

  get course_name() {
    return this.enquiry_form.get('course_name');
  }

  get category() {
    return this.enquiry_form.get('category');
  }

  get message() {
    return this.enquiry_form.get('message');
  }

  onSubmit() {
    if (this.enquiry_form.valid) {
      const body = {
        course_name: this.course_name.value,
        category: this.category.value,
        message: this.message.value
      }
      console.log('Form Submitted!', body);

    } else {
      this.enquiry_form.markAllAsTouched(); // Marks all fields to show validation errors
    }
  }

  slides = [
    { img: "assets/students.jpg",
      heading:"Heading",
      para:"It is a long established fact that a reader, It is a long established fact that a reader. "
    },
    { img: "assets/students.jpg",
      heading:"Heading",
      para:"It is a long established fact that a reader, It is a long established fact that a reader. "
    },
    { img: "assets/students.jpg",
      heading:"Heading",
      para:"It is a long established fact that a reader, It is a long established fact that a reader. "
    },
    { img: "assets/students.jpg",
      heading:"Heading",
      para:"It is a long established fact that a reader, It is a long established fact that a reader. "
    },
    { img: "assets/students.jpg",
      heading:"Heading",
      para:"It is a long established fact that a reader, It is a long established fact that a reader. "
    },
    { img: "assets/students.jpg",
      heading:"Heading",
      para:"It is a long established fact that a reader, It is a long established fact that a reader. "
    },
    { img: "assets/students.jpg",
      heading:"Heading",
      para:"It is a long established fact that a reader, It is a long established fact that a reader. "
    },
    { img: "assets/students.jpg",
      heading:"Heading",
      para:"It is a long established fact that a reader, It is a long established fact that a reader. "
    }
  ];
  popularslideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1, 
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1000,
    'responsive': [
      {
        'breakpoint': 807,
        'settings': {
          'slidesToShow': 1
        }
      }
    ]
  };
  
  studentsslideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1, 
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1000,
    'responsive': [
      {
        'breakpoint': 807,
        'settings': {
          'slidesToShow': 1
        }
      }
    ]
  };
  
  slickInit(e:any) {}
  breakpoint(e:any) {}
  afterChange(e:any) {}
  beforeChange(e:any) {}

}
