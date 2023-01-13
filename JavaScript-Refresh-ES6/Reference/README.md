# Referencje i typy prymitiwne
##  Typy prymitiwne
Typy podstawowe w JS są typami prymitiwnymi <np. number>, czyli 
### Przykład
    ```javascript
    const number = 1;
    const number2 = number;
    ```
W tym przypadku, gdy przechowywujemy lub przypisujemy ponownie wartość z innej zmiennej, to jest to ** kopiowane **

## Referemcje
Obiekty i tablice to typy referencyjne, czyli
### Przykład
    ```javascript
    const Person={
        name:"Max"
    };
    const newPerson = Person;
    const neverChangePerson={...Person};
    Person.name="Maciej";
    ```
W tym przypadku ** nie występuje ** kopiowanie. Obiekt "Person" zostaje przechowywany w pamięci a w "const Person" znajduje się jedynie wskaźnik do tego miejsca w pamięci. W tym przypadku, po zmianie wartości, wartość atrybutu name w obiekcie newPerson również się zmieni. Jednak w przypadku stałej neverChangePerson, nawet w przypadku zmiany nazwy w obiekcie Person, nazwa nie zmieni się, bo nie skopiowaliśmy wskaźnika do obiektu, tylko zawartość obiektu w danym momencie

