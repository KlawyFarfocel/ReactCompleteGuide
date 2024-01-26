## Common Patterns & Practices

### Compound Components Patterns

Compound Components are React components which don't work standalone, but instead **together** in conjunction. For example:
`<select>` and `<option>` are not useful on they own - they are meant to be used in conjunction.

It is a common practice when building compound components to merge component identifiers into one object. The all identifiers should be merged into the main wrapping function object. What we can do, is inside of Accordion.jsx we can state

```javascript
Accordion.Item = AccordionItem;
```

Of course, AccordionItem have to be imported before. What that makes is instead of manually importing it in App.js, we can simply use this structure:

```javascript
<Accordion className="accordion">
  <Accordion.Item></Accordion.Item>
</Accordion>
```

### Render Props Patterns

The core idea behind Render Props pattern is passing a **function as a value** for the **children** prop. One component defines a function, which return **something renderable** and this function is passed as a value for the children prop. Let's have a look at the example, so it can become clearer:

```javascript
return (
  <div className="searchable-list">
    <input
      onChange={handleSearchChange}
      type="search"
      placeholder="Search..."
    />
    <ul>
      {searchResult.map((item) => (
        <li key={itemKeyFn(item)}>{children(item)}</li>
      ))}
    </ul>
  </div>
);
```

As we see, instead of just listing {children} we use it as a function. We do that, because the data that are offered by children prop can differ, so it not always be a object or some renderable JSX. Then, in App.jsx, we set this up like this:

```javascript
      <SearchableList items={PLACES} itemKeyFn={(item)=>item.id}>
        {(item) => <Place item={item} />}
      </SearchableList>
      <SearchableList items={["item1", "item2"]} itemKeyFn={(item)=>item}>
        {(item) => item}
      </SearchableList>
```
PLACES is an array of objects, so in this case we want to pass an renderable JSX object, so the data can be processed. In case of array of string, we just want to output these strings, so we don't need any extra JSX code. Thanks to that, we created a component, which is much more configurable.

### Debouncing

It is a technique where we don't update the data on every keystroke, but instead, we define some timing treshold, where, for example, we update the function after the user stopped typing. That's how the debouncing can be applied:

```javascript
function handleSearchChange(event) {
  if (lastChange.current) {
    clearTimeout(lastChange.current);
  }
  lastChange.current = setTimeout(() => {
    lastChange.current = null;
    setSeachTerm(event.target.value);
  }, 500);
}
```

As can be seen in the example, when the key is pressed, we check if the ref value exist - if so, we want to clear any timeouts that exists, so no function will be executed. However, if the timer has passed [user stopped typing for 500ms] we update the search results - that can improve the performance if the searching function is more complex, or there is a need of sending HTTP request.
