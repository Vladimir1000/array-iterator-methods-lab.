const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  //1.-------------------------------------------------------------------------
  const inventorBornIn1500s = inventors.filter(function (inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
    return inventor;
    }
  });
  console.log(inventorBornIn1500s);

  //2.-------------------------------------------------------------------------------

  const inventorNames = inventors.map(function (inventor) {
    return {
        first: inventor.first,
        last: inventor.last
    };
  });
  console.log(inventorNames);

  //3.-------------------------------------------------------------------------------
  
  const sortedByBirthYear = inventors.sort(function (year1, year2){
    return year1.year - year2.year;
  });
  console.log(sortedByBirthYear);

  //4.----------------------------------------------------------------------------------

  const inventorNameAda = inventors.find(function(inventor){
    if (inventor.first == 'Ada'){
        return inventor
    }
  });
  console.log(inventorNameAda);

  //-----------------------------------------------------------------------------------

  const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  //5.---------------------------------------------------------------------------------

  let firstLast = people.map(function(name){
    let splitName = name.split(', ');
    return splitName[1] + ' ' + splitName[0];
  });
  console.log(firstLast);

  //---------------------------------------------------------------------------------

  const devs = [
    { name: 'Alex', year: 1988 },
    { name: 'Dani', year: 1986 },
    { name: 'Matt', year: 1970 },
    { name: 'Wes', year: 2015 }
  ];

  //6.---------------------------------------------------------------------------------

  let isAdultPresent = devs.some(function(person){
    return person.year <= 2006;
  });
  console.log(isAdultPresent);

  //7.-----------------------------------------------------------------------------------

  let isEveryone19OrOlder = devs.every(function(person){
    return devs.year <= 2005;
  });
  console.log(isEveryone19OrOlder);

  //----------------------------------------------------------------------------------
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  //8.--------------------------------------------------------------------------------

  let commentById = comments.find(function(commentId){
    if (commentId.id === 823423 ){
        return commentId;
    }
  });
  console.log(commentById);

  //9.----------------------------------------------------------------------------------

  let idx = comments.findIndex(function(index){
    return index.id === 123523;
  });
  console.log(idx);

  //------------------------------------------------------------------------------------



  const travelMethods = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];
  
 

  
  