import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
    $(document).on('scroll', onScroll);
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off('scroll');
        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        const target = this.hash;
        const menu = target;
        const $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on('scroll', onScroll);
        });
    });
});
  }


}

function   onScroll(event){
    const scrollPos = $(document).scrollTop();
    $('#collapsibleNavbar a').each(function () {
        const currLink = $(this);
        const refElement = $(currLink.attr('href'));
        if (refElement.position().top <= scrollPos && refElement.position().top + 45 + refElement.height() > scrollPos) {
            $('#collapsibleNavbar ul li a').removeClass('active');
            currLink.addClass('active');
        } else {
            currLink.removeClass('active');
        }
    });
}
