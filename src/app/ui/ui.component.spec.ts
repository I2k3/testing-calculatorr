import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 2;
     component.operator2 = 2;
 
     // Act
     component.addition();
     result = component.result;
 
     // Assert
     expect(result).toBe(4);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the addition button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.addition-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(7.5);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
 
    // Act
    component.addition();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('10');
     
  });

});

//resta******************************************************************************************
describe('Ui substraction - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call subtraction method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 1;
     component.operator2 = 2;
 
     // Act
     component.substraction();
     result = component.result;
 
     // Assert
     expect(result).toBe(-1);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should substract operator1 and operator2 when i click the substraction button ', () => {
    // Arrange 
    component.operator1 = 2.0;
    component.operator2 = 2.0;
    let substractionButton = fixture.debugElement.query(By.css('.substraction-button'));

    // Act
    substractionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(0.0);

   });

  it('Should render rest in result div', () => {
    // Arrange
    component.operator1 = 40;
    component.operator2 = 20;
 
    // Act
    component.substraction();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('20');
     
  });

});

//MULTIPLICACION******************************************************************************************
describe('Ui multiplication - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call multiplication method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 2;
     component.operator2 = 2;
 
     // Act
     component.multiplication();
     result = component.result;
 
     // Assert
     expect(result).toBe(4);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should multiply operator1 and operator2 when i click the multiplication button ', () => {
    // Arrange 
    component.operator1 = 2.0;
    component.operator2 = 2.0;
    let multiplicationButton = fixture.debugElement.query(By.css('.multiplication-button'));

    // Act
    multiplicationButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(4.0);

   });

  it('Should render multi in result div', () => {
    // Arrange
    component.operator1 = 40;
    component.operator2 = 20;
 
    // Act
    component.multiplication();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('800');
     
  });

});
//DIVISION******************************************************************************************
describe('Ui division - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call division method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 10;
     component.operator2 = 2;
 
     // Act
     component.division();
     result = component.result;
 
     // Assert
     expect(result).toBe(5);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should divi operator1 and operator2 when i click the division button ', () => {
    // Arrange 
    component.operator1 = 10.0;
    component.operator2 = 2.0;
    let divisionButton = fixture.debugElement.query(By.css('.division-button'));

    // Act
    divisionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(5.0);

   });

  it('Should render divi in result div', () => {
    // Arrange
    component.operator1 = 60;
    component.operator2 = 30;
 
    // Act
    component.division();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('2');
     
  });

});
// E   X   P******************************************************************************************
describe('Ui exp - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call Exp method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 3;
     component.operator2 = 5;
 
     // Act
     component.exp();
     result = component.result;
 
     // Assert
     expect(result).toBe(243);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '5';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(5);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.7';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.7);
  });


  it('should elevate operator1 to operator2 when i click the exp button ', () => {
    // Arrange 
    component.operator1 = 7.0;
    component.operator2 = 3.0;
    let expButton = fixture.debugElement.query(By.css('.exp-button'));

    // Act
    expButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(343);

   });
   it('Should render exp in result div', () => {
    // Arrange
    component.operator1 = 9;
    component.operator2 = 4;
 
    // Act
    component.exp();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('6561');
     
  });
});
// S   Q   R******************************************************************************************
describe('Ui Sqr - Component', () => {
let component: UiComponent;
let fixture: ComponentFixture<UiComponent>;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ UiComponent ],
    imports: [FormsModule],
  })
  .compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(UiComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('Should call Sqr method', () => {
   // Arrange
   let result = 0;
   component.operator1 = 7;

   // Act
   component.sqr();
   result = component.result;

   // Assert
   expect(result).toBe(49);
});



it('Should set operator1 model through ngModel', async() => {
  // Arrange 
  await fixture.whenStable();
  fixture.detectChanges();
  const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

  // Act 
  inputElement.value = '5';
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  // Assert 
  expect(component.operator1).toEqual(5);
});

it('should sqr operator1 when i click the sqr button ', () => {
  // Arrange 
  component.operator1 = 6.0;
  let sqrButton = fixture.debugElement.query(By.css('.sqr-button'));

  // Act
  sqrButton.triggerEventHandler('click', null);

  // Assert
  expect(component.result).toBe(36);

 });

it('Should render sqr in result div', () => {
  // Arrange
  component.operator1 = 10;

  // Act
  component.sqr();
  fixture.detectChanges();
  
  let de = fixture.debugElement.query(By.css('.result'));
  let el : HTMLElement = de.nativeElement;

  // Assert
  expect(el.innerText).toContain('100');
   
});

});
// S   Q   R   T******************************************************************************************
describe('Ui Sqrt- Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call Sqrt method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 9;
 
     // Act
     component.sqrt();
     result = component.result;
 
     // Assert
     expect(result).toBe(3);
  });

  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '7';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(7);
  });

  it('should sqrt operator1 when i click the sqrt button ', () => {
    // Arrange 
    component.operator1 = 12.0;
    let sqrtButton = fixture.debugElement.query(By.css('.sqrt-button'));

    // Act
    sqrtButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(3.4641016151377544);

   });

  it('Should render sqrt in result div', () => {
    // Arrange
    component.operator1 = 10;
 
    // Act
    component.sqrt();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('3.16227766');
     
  });

});