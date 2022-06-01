function introduction(Jacque) {
    return `Hi, my name is ${Jacque}.`;
      }
function introductionWithLanguage(Jacque,JavaScript) {
    return `Hi, my name is ${Jacque} and I am learning to program in ${JavaScript}.`;
        }

function introductionWithLanguage(Jacque,Language  ) {
    Language = (typeof Language === 'undefined') ? 'JavaScript' : Language;
    var introductionWithLanguage = Jacque + Language;
     return introductionWithLanguage; }
