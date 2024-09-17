{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /* script.js */\
\
// Initialize AOS Library\
AOS.init();\
\
// Smooth Scrolling for Navigation Links\
document.querySelectorAll('a.nav-link').forEach(anchor => \{\
    anchor.addEventListener('click', function (e) \{\
        e.preventDefault();\
        document.querySelector(this.getAttribute('href')).scrollIntoView(\{\
            behavior: 'smooth'\
        \});\
    \});\
\});\
\
// Back-to-Top Button Functionality\
const backToTopButton = document.getElementById('back-to-top');\
\
window.onscroll = function () \{\
    scrollFunction();\
\};\
\
function scrollFunction() \{\
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) \{\
        backToTopButton.style.display = 'block';\
    \} else \{\
        backToTopButton.style.display = 'none';\
    \}\
\}\
\
backToTopButton.addEventListener('click', function () \{\
    window.scrollTo(\{ top: 0, behavior: 'smooth' \});\
\});\
\
// Google Map Initialization\
function initMap() \{\
    const location = \{ lat: 40.7128, lng: -74.0060 \}; // Replace with your coordinates\
    const map = new google.maps.Map(document.getElementById('googleMap'), \{\
        zoom: 12,\
        center: location\
    \});\
    const marker = new google.maps.Marker(\{\
        position: location,\
        map: map\
    \});\
\}\
\
// Load the map when the window loads\
window.onload = function() \{\
    initMap();\
\};\
\
// Contact Form Submission Handling\
const form = document.getElementById('contact-form');\
form.addEventListener('submit', function (e) \{\
    e.preventDefault();\
\
    // Collect form data\
    const formData = \{\
        name: form.name.value.trim(),\
        email: form.email.value.trim(),\
        message: form.message.value.trim(),\
    \};\
\
    // Validate form data\
    if (validateForm(formData)) \{\
        // Send form data to the server or CRM system\
        // This requires server-side code or integration with a CRM API\
        alert('Thank you for your message!');\
        form.reset();\
    \}\
\});\
\
function validateForm(data) \{\
    if (data.name === '') \{\
        alert('Please enter your name.');\
        return false;\
    \}\
    if (data.email === '') \{\
        alert('Please enter your email.');\
        return false;\
    \} else if (!validateEmail(data.email)) \{\
        alert('Please enter a valid email address.');\
        return false;\
    \}\
    if (data.message === '') \{\
        alert('Please enter your message.');\
        return false;\
    \}\
    return true;\
\}\
\
function validateEmail(email) \{\
    // Simple email validation regex\
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\
    return re.test(String(email).toLowerCase());\
\}\
}