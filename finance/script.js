// 각 섹션으로 스크롤 이동하는 버튼에 대한 이벤트 처리
const scrollToNextSectionButtons = document.querySelectorAll('.scrollToNextSectionButton');
scrollToNextSectionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const nextSection = button.closest('section').nextElementSibling;
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });
});

