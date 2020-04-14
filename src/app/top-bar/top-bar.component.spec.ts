import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
    let component: TopBarComponent;
    let fixture: ComponentFixture<TopBarComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TopBarComponent ],
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(TopBarComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    })
    
    it('should be visible', () => {
        expect(component).toBeTruthy();
    });
});
