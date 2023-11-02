# Worksing with Forms and Inputs
## Trickier than it might seem
### What is difficult about forms

### Handling Form Submission
To handle form submission, instead of just plain sending HTTP Request, you use preventDefault() metod to prevent form submission in order to deal with js logic before.

Entered values can be managed via states or extracted via refs. 
### Validating User Input
Providing a good user experience is tricky
- You can validate on every keystroke -> errors may be shown too early
- You can validate on last focus -> errors may be shown to loong
- You can validate on form submission -> errors may be shown too late
### Using built-in Form Features
You an extract entered values via FormData objet