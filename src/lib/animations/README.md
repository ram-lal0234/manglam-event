# Animation System Documentation

## Overview

The Manglam Event animation system provides a centralized, consistent, and performant approach to animations throughout the application. It's built on top of Framer Motion and includes reusable patterns, hooks, and components.

## Architecture

```
src/lib/animations/
├── animations.ts          # Core animation variants and utilities
├── hooks/
│   └── useAnimations.ts   # Custom animation hooks
└── components/
    ├── AnimatedSection.tsx
    ├── AnimatedCard.tsx
    └── AnimatedButton.tsx
```

## Core Features

### ✅ Performance Optimized
- Respects `prefers-reduced-motion` user preference
- Automatic performance detection for low-power devices
- Optimized rendering with proper cleanup

### ✅ Accessibility Compliant
- Reduced motion support
- Keyboard navigation friendly
- Screen reader compatible

### ✅ Consistent Design
- Unified animation timing and easing
- Consistent hover and interaction patterns
- Theme-aware animations

### ✅ Developer Friendly
- TypeScript support
- Reusable components and hooks
- Comprehensive documentation

## Usage Examples

### 1. Basic Animation Variants

```tsx
import { motion } from "framer-motion";
import { slideUpVariants, fadeInVariants } from "@/lib/animations";

// Slide up animation
<motion.div
  variants={slideUpVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  Content here
</motion.div>

// Fade in animation
<motion.div
  variants={fadeInVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  Content here
</motion.div>
```

### 2. Using Animation Hooks

```tsx
import { useScrollAnimation, useCardAnimation } from "@/lib/hooks/useAnimations";

const MyComponent = () => {
  const { ref, isInView, animationProps } = useScrollAnimation();
  const { cardProps, imageProps } = useCardAnimation();

  return (
    <motion.div ref={ref} {...animationProps}>
      <motion.div {...cardProps}>
        <motion.img {...imageProps} src="/image.jpg" />
      </motion.div>
    </motion.div>
  );
};
```

### 3. Using Animation Components

```tsx
import AnimatedSection from "@/components/common/AnimatedSection";
import AnimatedCard from "@/components/common/AnimatedCard";
import AnimatedButton from "@/components/common/AnimatedButton";

const MyPage = () => {
  return (
    <AnimatedSection variant="slideUp" delay={0.2}>
      <h1>Welcome to Manglam Event</h1>
      
      <div className="grid grid-cols-3 gap-6">
        {services.map((service, index) => (
          <AnimatedCard key={service.id} index={index} hover>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </AnimatedCard>
        ))}
      </div>
      
      <AnimatedButton variant="primary">
        Get Started
      </AnimatedButton>
    </AnimatedSection>
  );
};
```

### 4. Staggered Animations

```tsx
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const StaggeredList = () => {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.div key={item.id} variants={staggerItemVariants}>
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  );
};
```

### 5. Continuous Animations

```tsx
import { useContinuousAnimation } from "@/lib/hooks/useAnimations";

const FloatingElement = () => {
  const { animationProps } = useContinuousAnimation('floating');
  
  return (
    <motion.div {...animationProps}>
      ✨
    </motion.div>
  );
};
```

## Animation Variants

### Basic Variants
- `fadeInVariants` - Simple fade in
- `slideUpVariants` - Slide up from below
- `slideDownVariants` - Slide down from above
- `slideLeftVariants` - Slide in from right
- `slideRightVariants` - Slide in from left
- `scaleVariants` - Scale up from small

### Interactive Variants
- `cardHoverVariants` - Card hover effects
- `buttonHoverVariants` - Button interactions
- `iconRotationVariants` - Continuous rotation
- `floatingVariants` - Floating animation
- `pulseGlowVariants` - Pulse with glow

### Container Variants
- `staggerContainerVariants` - For staggered children
- `staggerItemVariants` - Individual staggered items

## Animation Hooks

### useScrollAnimation
Triggers animations when elements come into view.

```tsx
const { ref, isInView, animationProps } = useScrollAnimation({
  threshold: 0.3,
  once: true,
  margin: "-100px"
});
```

### useStaggerAnimation
Manages sequential animations for multiple elements.

```tsx
const { getItemAnimationProps } = useStaggerAnimation(5, 0.1);
```

### useHoverAnimation
Provides consistent hover effects.

```tsx
const { hoverProps } = useHoverAnimation({
  scale: 1.05,
  y: -5,
  spring: true
});
```

### useCardAnimation
Complete card animation patterns.

```tsx
const { cardProps, imageProps, iconProps } = useCardAnimation();
```

### useSectionHeaderAnimation
Standard section header patterns.

```tsx
const { containerProps, badgeProps, titleProps } = useSectionHeaderAnimation();
```

### useContinuousAnimation
Infinite animations like rotation, floating, etc.

```tsx
const { animationProps } = useContinuousAnimation('rotation');
```

### useOptimizedAnimation
Performance-optimized animations.

```tsx
const { getOptimizedConfig } = useOptimizedAnimation();
```

## Animation Components

### AnimatedSection
Reusable section wrapper with consistent animations.

```tsx
<AnimatedSection 
  variant="slideUp" 
  delay={0.2} 
  stagger 
  className="py-20"
>
  <h2>Section Title</h2>
  <p>Section content...</p>
</AnimatedSection>
```

### AnimatedCard
Card component with hover and entrance animations.

```tsx
<AnimatedCard 
  index={0} 
  hover 
  scale 
  className="rounded-lg p-6"
>
  <h3>Card Title</h3>
  <p>Card content...</p>
</AnimatedCard>
```

### AnimatedButton
Button component with consistent interactions.

```tsx
<AnimatedButton 
  variant="primary" 
  delay={0.5}
  onClick={handleClick}
>
  Click Me
</AnimatedButton>
```

## Configuration

### Animation Timing
```tsx
export const animationConfig = {
  fast: { duration: 0.2, ease: "easeOut" },
  normal: { duration: 0.4, ease: "easeOut" },
  slow: { duration: 0.8, ease: "easeOut" },
  spring: { type: "spring", stiffness: 400, damping: 17 }
};
```

### Viewport Settings
```tsx
export const viewportConfig = {
  once: { once: true, margin: "-100px" },
  custom: (margin: string) => ({ once: true, margin }),
  repeat: { once: false, margin: "-100px" }
};
```

## Best Practices

### 1. Performance
- Use `viewport={{ once: true }}` for scroll animations
- Implement proper cleanup in useEffect
- Respect reduced motion preferences
- Use `transform` and `opacity` for smooth animations

### 2. Accessibility
- Always check `prefers-reduced-motion`
- Provide alternative interactions for keyboard users
- Ensure animations don't interfere with screen readers

### 3. Consistency
- Use predefined variants and patterns
- Maintain consistent timing and easing
- Follow the established animation hierarchy

### 4. User Experience
- Keep animations subtle and purposeful
- Provide visual feedback for interactions
- Ensure animations enhance, not distract

## Common Patterns

### Section Header Pattern
```tsx
const SectionHeader = () => {
  const { containerProps, badgeProps, titleProps } = useSectionHeaderAnimation();
  
  return (
    <motion.div {...containerProps}>
      <motion.div {...badgeProps}>
        <span>Badge</span>
      </motion.div>
      <motion.h2 {...titleProps}>
        Section Title
      </motion.h2>
    </motion.div>
  );
};
```

### Card Grid Pattern
```tsx
const CardGrid = () => {
  const { cardProps } = useCardAnimation();
  
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.div key={item.id} variants={staggerItemVariants}>
          <motion.div {...cardProps}>
            {item.content}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};
```

### Button Group Pattern
```tsx
const ButtonGroup = () => {
  const { buttonProps } = useButtonAnimation();
  
  return (
    <div className="flex gap-4">
      <motion.button {...buttonProps}>
        Primary Action
      </motion.button>
      <motion.button {...buttonProps}>
        Secondary Action
      </motion.button>
    </div>
  );
};
```

## Troubleshooting

### Common Issues

1. **Animations not triggering**
   - Check viewport configuration
   - Ensure element is in the viewport
   - Verify `whileInView` is properly set

2. **Performance issues**
   - Use `once: true` for scroll animations
   - Implement proper cleanup
   - Check for memory leaks

3. **Inconsistent timing**
   - Use predefined animation configs
   - Avoid custom durations unless necessary
   - Maintain consistent easing functions

### Debug Tips

1. **Enable Framer Motion DevTools**
   ```tsx
   import { LazyMotion, domAnimation } from "framer-motion";
   
   <LazyMotion features={domAnimation}>
     <App />
   </LazyMotion>
   ```

2. **Check reduced motion**
   ```tsx
   const { shouldReduceMotion } = useOptimizedAnimation();
   console.log('Reduced motion:', shouldReduceMotion);
   ```

3. **Monitor performance**
   ```tsx
   const { isLowPowerDevice } = useOptimizedAnimation();
   console.log('Low power device:', isLowPowerDevice);
   ```

## Migration Guide

### From Inline Animations
```tsx
// Before
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

// After
<motion.div
  variants={slideUpVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
```

### From Custom Hooks
```tsx
// Before
const useCustomAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  // ... custom logic
};

// After
const { ref, isInView, animationProps } = useScrollAnimation();
```

## Contributing

When adding new animations:

1. **Follow the established patterns**
2. **Add TypeScript types**
3. **Include performance considerations**
4. **Update documentation**
5. **Test with reduced motion**
6. **Ensure accessibility compliance**

## Support

For questions or issues:

1. Check this documentation
2. Review existing implementations
3. Test with different devices and preferences
4. Consider performance implications
5. Ensure accessibility compliance 