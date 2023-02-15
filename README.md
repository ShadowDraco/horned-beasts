# Showing off different animals with horns and some information about them

## Deployed on Netlify at [Fantastic Horned Beasts](https://fantastic-horned-beasts.netlify.app)

### How Long Day 2?

- Number and name of feature:
  - #1 Display images
- Estimate of time needed to complete:
  - 10 minutes
- Start time:
  - 11:30
- Finish time:
  - 11:35
- Actual time needed to complete:

  - 5 minutes

- Number and name of feature:
  - #2 Favorites
- Estimate of time needed to complete:
  - 10 minutes
- Start time:
  - 11:50
- Finish time:
  - 12:10
- Actual time needed to complete:

  - 20 minutes

- Number and name of feature:
  - #3 Bootstrap
- Estimate of time needed to complete:
  - 5 minutes
- Start time:
  - 11:30
- Finish time:
  - 11:40
- Actual time needed to complete:

  - 10 minutes

- Number and name of feature:
  - #4 Add interactions, and filter
- Estimate of time needed to complete:
  - 25 minutes
- Start time:
  - 1:00
- Finish time:
  - 2:30
- Actual time needed to complete:
  - 1 hour 30 minutes

> Implementing bootstrap and changing the entire layout of the page, **and** adding
> the favorites feature was extremely easy. Though adding a filter took a lot of time
> because I was trying to make it fit in with my other interactions without having to
> write more components and pass more props. In the end I think I found a good solution!!

```javascript
//I do have a question about how I could improve my method though, I ended up using a quick and possibly a dirty solution to my problem like this.

filterBeasts = beasts => {
 if (!this.state.filter) return this.props.beasts
 let sorted = []
 this.props.beasts.forEach(beast => {
  sorted.push(beast)
 })
 return sorted.sort((a, b) => b.horns - a.horns)
}

//And I feel dumb for not being able to create an array equal to *this.props.beasts*
//without pointing to it and thus overwriting it. But I think my problem will be quickly solved by fixing that.
```

It felt really good to make the filters in css and js, and it was pretty fun to include the gallery 'theme' and card 'theme'!

- **I spent about 3 hours on this assignment**.

### How long Day 3

- Number and name of feature:
  - #1 Display modals
- Estimate of time needed to complete:
  - 20 minutes
- Start time:
  - 11:50
- Finish time:
  - 1:10
- Actual time needed to complete:

  - 1 hour 20 minutes

- Number and name of feature:
  - #2 Add search filter
- Estimate of time needed to complete:
  - 20 minutes
- Start time:
  - 11:30
- Finish time:
  - 11:35
- Actual time needed to complete:

  - 5 minutes

- **I spent about 3 hours on this assignment**.
