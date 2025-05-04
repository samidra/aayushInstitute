import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
   
@Component({ 
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  images = [

    {
      path: 'assets/16687123188.jpg',
    },
    {
      path: 'assets/166868591120.jpg',   
    },
    {
      path: 'assets/166868706633.jpg',
    },
    
  ];
  
  more:any= 'more';
  less:any= 'less';
  selectedOrderIndex: string  | null = null;

  toggleOrderDetails(item: string): void {
    if (this.selectedOrderIndex === item) {
      this.selectedOrderIndex = null; // Hide the details if already selected
      
      this.less= 'less';
      this.more= 'more';

    } else {
      this.selectedOrderIndex = item; // Show the details of the clicked order
      this.more= 'less';
      this.less= 'more';
    }
  }

  isOrderDetailsOpen(item: string): boolean {
    return this.selectedOrderIndex === item;
  }
 
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


}
