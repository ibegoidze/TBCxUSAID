import courseData from './static.js';

const container = document.getElementById('components-container');

// CREATING COMPONENT HTML
const createComponent = (imgSrc, courseName) => {
  return `
  <div class='single-component'>
    <img src="${imgSrc}" alt="course image">
    <h3 class="course-heading" loading="lazy">${courseName}</h3>
    <span>რეგისტრაცია დასრულებულია</span>
    <div class="svg-span">
     <svg preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true"><defs><style>#comp-lnoncoa62__12a0b52d-d2f4-498f-8668-ef4342a659a0 svg [data-color="1"] {fill: #00AEEF;}</style></defs>
      <g>
        <path d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z" data-color="1"></path>
      </g>
     </svg>
     <span>კურსის დეტალები</span>
    </div>
  </div>
  `;
};

// RENDERING ALL COMPONENTS
const renderComponents = () => {
  const componentsHTML = courseData
    .map(component => createComponent(component.imgSrc, component.courseName))
    .join('');
  container.innerHTML = componentsHTML;
};
renderComponents();
