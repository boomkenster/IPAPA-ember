import DS from 'ember-data';

let Type = DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  recipes: DS.hasMany('recipes', { async: true })
});

Type.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "IPA",
      "image": "http://www.scientificamerican.com/sciam/cache/file/BCEF876F-3D0B-4AB4-85DA1CE566DA2DA8_article.jpg?8F1BC",
      "recipes": [1, 6, 7]

    },
    {
      "id": 2,
      "name": "Stout",
      "image": "http://www.scientificamerican.com/sciam/cache/file/BCEF876F-3D0B-4AB4-85DA1CE566DA2DA8_article.jpg?8F1BC", "recipes":[2]
    },
    {
      "id": 3,
      "name": "Lager",
      "image": "http://www.scientificamerican.com/sciam/cache/file/BCEF876F-3D0B-4AB4-85DA1CE566DA2DA8_article.jpg?8F1BC", "recipes":[3]
    },
    {
      "id": 4,
      "name": "Sour",
      "image": "http://www.scientificamerican.com/sciam/cache/file/BCEF876F-3D0B-4AB4-85DA1CE566DA2DA8_article.jpg?8F1BC", "recipes":[4]
    },
    {
      "id": 5,
      "name": "Belgian",
      "image": "http://www.scientificamerican.com/sciam/cache/file/BCEF876F-3D0B-4AB4-85DA1CE566DA2DA8_article.jpg?8F1BC", "recipes":[5]
    }
  ]
});

export default Type;
