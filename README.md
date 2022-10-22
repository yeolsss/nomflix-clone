## Nomflix Clone

---

### useAnimation(Header part Four)

    한번에 많은 animation을 한번에 실행시키고 싶을때 사용한다.

```javascript
const inputAnimation = useAnimation();

  const onSearchOpen = () => {
    if (searchOpen) {
      inputAnimation.start({ scaleX: 0 });
    } else {
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };

  ..중략

  <Input
    animate={inputAnimation}
    initial={{ scaleX: 0 }}
    transition={{ type: 'linear' }}
    type="text"
    placeholder="Search for movie or TV show..."
  />

//nav로 비교

  const navAnimation = useAnimation();
  useEffect(() => {
      scrollY.onChange(() => {
        if (scrollY.get() > 80) {
          navAnimation.start({
            backgroundColor: 'rgba(0, 0, 0, 1)',
          });
        } else {
          navAnimation.start({
            backgroundColor: 'rgba(0, 0, 0, 0)',
          });
        }
      });
    }, [scrollY]);

  ..중략

   <Nav
      animate={navAnimation}
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
    >
    </Nav>

// variants 추가한 nav

  const navVariants: Variants = {
    top: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    scroll: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
  };

  ..중략

  const navAnimation = useAnimation();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start('scroll');
      } else {
        navAnimation.start('top');
      }
    });
  }, [scrollY, navAnimation]);

  ..중략

    <Nav variants={navVariants} animate={navAnimation} initial="top">
    </Nav>

```
