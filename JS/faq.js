import { faqData } from './static.js';

const faqSection = document.querySelector('.faq-body');

document.addEventListener('DOMContentLoaded', () => {
  faqData.forEach(faq => {
    // FAQ ITEM WRAPPING QUESTION-ICON CONTAINER AND ANSWER DIV
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    // CONTAINER FOR H3 QUESTIONS AND ARROW SPAN
    const questionIconContainer = document.createElement('div');
    questionIconContainer.className = 'question-icon-container';
    // CREATE H3 FOR QUESTIONS
    const question = document.createElement('h3');
    question.textContent = faq.question;
    question.className = 'question';
    // CREATE ARROW SPAN
    const expandIcon = document.createElement('span');
    expandIcon.className = 'material-symbols-outlined';
    expandIcon.textContent = 'expand_more';
    // CREATE ANSWER DIV
    const answer = document.createElement('div');
    answer.textContent = faq.answer;
    answer.className = 'answer';
    answer.style.display = 'none';
    // TOGGLE ANSWER DIV
    questionIconContainer.addEventListener('click', () => {
      const isExpanded = answer.style.display === 'block';
      answer.style.display = isExpanded ? 'none' : 'block';
      expandIcon.classList.toggle('rotate-arrow');
    });
    // PLACING CREATED ELEMENTS
    faqSection.appendChild(faqItem);
    faqItem.appendChild(questionIconContainer);
    faqItem.appendChild(answer);
    questionIconContainer.appendChild(question);
    questionIconContainer.appendChild(expandIcon);
  });
});
