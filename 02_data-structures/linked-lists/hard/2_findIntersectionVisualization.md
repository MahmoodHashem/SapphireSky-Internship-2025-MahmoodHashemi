# Intersection Solution Visualization

## **Case 1 (Have Intersection & Same Len)**

```bash
       a
A:     a1 → a2 → a3
                   ↘
                     c1 → c2 → c3 → null
                   ↗
B:     b1 → b2 → b3
       b
```

```bash
            a
A:     a1 → a2 → a3
                   ↘
                     c1 → c2 → c3 → null
                   ↗
B:     b1 → b2 → b3
            b
```

```bash
                 a
A:     a1 → a2 → a3
                   ↘
                     c1 → c2 → c3 → null
                   ↗
B:     b1 → b2 → b3
                 b
```

```bash
A:     a1 → a2 → a3
                   ↘ a
                      c1 → c2 → c3 → null
                   ↗ b
B:     b1 → b2 → b3
```

Since `a == b` is true, end loop `while(a != b)`, return the intersection node `a = c1`.

## **Case 2 (Have Intersection & Different Len):**

```bash
            a
A:          a1 → a2
                   ↘
                     c1 → c2 → c3 → null
                   ↗
B:     b1 → b2 → b3
       b
```

```bash
                 a
A:          a1 → a2
                   ↘
                     c1 → c2 → c3 → null
                   ↗
B:     b1 → b2 → b3
            b
```

```bash
A:          a1 → a2
                   ↘a
                     c1 → c2 → c3 → null
                   ↗
B:     b1 → b2 → b3
                 b
```

```bash
A:          a1 → a2
                   ↘     a
                     c1 → c2 → c3 → null
                   ↗b
B:     b1 → b2 → b3
```

```bash
A:          a1 → a2
                   ↘          a
                     c1 → c2 → c3 → null
                   ↗     b
B:     b1 → b2 → b3
```

```bash
A:          a1 → a2
                   ↘                a = null, then a = b1
                     c1 → c2 → c3 → null
                   ↗          b
B:     b1 → b2 → b3
```

```bash
A:          a1 → a2
                   ↘
                     c1 → c2 → c3 → null
                   ↗                b = null, then b = a1
B:     b1 → b2 → b3
       a
```

```bash
            b
A:          a1 → a2
                   ↘
                     c1 → c2 → c3 → null
                   ↗
B:     b1 → b2 → b3
            a
```

```bash
                 b
A:          a1 → a2
                   ↘
                     c1 → c2 → c3 → null
                   ↗
B:     b1 → b2 → b3
                 a
```

```bash
A:          a1 → a2
                   ↘b
                     c1 → c2 → c3 → null
                   ↗a
B:     b1 → b2 → b3
```

Since `a == b` is true, end loop `while(a != b)`, return the intersection node `a = c1`.


## **Case 3 (Have No Intersection & Same Len):**

```bash
       a
A:     a1 → a2 → a3 → null
B:     b1 → b2 → b3 → null
       b
```

```bash
            a
A:     a1 → a2 → a3 → null
B:     b1 → b2 → b3 → null
            b
```

```bash
                 a
A:     a1 → a2 → a3 → null
B:     b1 → b2 → b3 → null
                 b
```

```bash
                      a =null
A:     a1 → a2 → a3 → null
B:     b1 → b2 → b3 → null
                      b =null
```

Since `a == b` is true (both refer to null), end loop `while(a != b)`, return `a = null`.

## **Case 4 (Have No Intersection & Different Len):**

```javascript
       a
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
       b
```

```javascript
            a
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
            b
```

```javascript
                 a
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
                 b
```

```java
                      a
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
                      b =null, then b = a1
```

```java
       b                   a =null, then a = b1
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
```

```javascript
            b                 
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
       a
```

```javascript
                 b
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
            a
```

```javascript
                      b
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
                 a
```

```javascript
                           b =null
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
                      a =null
```

Since `a == b` is true (both refer to null), end loop `while(a != b)`, return `a = null`.






















df














df
