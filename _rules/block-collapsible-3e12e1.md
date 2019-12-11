---
id: 3e12e1
name: Block of content is expandable and collapsible
rule_type: atomic
description: |
  This rule checks that repeated blocks of content are expandable and collapsible
accessibility_requirements:
  wcag-technique:SCR28: # Using an expandable and collapsible menu to bypass block of content
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS styling
acknowledgements:
  authors:
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [HTML web page][].

## Expectations

For each [section of repeated content][] in the test target, there exists some [user interface component][] which:

- is [visible][]; and
- is [included in the accessibility tree][]; and
- allows to toggle both [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of this [section of repeated content][].

**Note**: the same [user interface component][] may be used for several or even all the [sections of repeated content][section of repeated content].

**Note**: [Technique SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28] does not require the [accessible name][] of the [user interface component][] to be descriptive.

## Assumptions

This rule assumes that [sections of repeated content][section of repeated content] have already been identified within the test target, for example by comparison with other test targets within the same website, or any other means.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [SCR28: Using an expandable and collapsible menu to bypass block of content][tech scr28]

## Test Cases

**Note**: The text of the examples is from the translation of the first Chapter of _The Three Kingdoms_ by Yu Sumei (Tuttle publishing, May 2014).

**Note**: Unless specified otherwise, the [sections of content][section of content] of each document are defined by the [landmarks][landmark] (`aside`, `main` and `nav` elements); both the complementary and navigational [sections of content][section of content] (`aside` and `nav` element) are [sections of repeated content][section of repeated content].

### Passed

#### Passed Example 1

The [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of the navigational [section of repeated content][] can be toggled on and off by the link at the start of the document.

```html
<html>
	<script src="../test-assets/block-collapsible-3e12e1/toggle-display.js" />
	<a href="#" onclick="toggleHidden('navigation')">Toggle table of content</a>
	<nav id="navigation">
		<h1>Contents</h1>
		<!-- list of links to each chapter -->
	</nav>
	<main>
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Passed Example 2

The [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of both the complementary and the navigational [sections of repeated content][section of repeated content] can be toggled on and off by the button at the start of the document.

```html
<html>
	<script src="../test-assets/block-collapsible-3e12e1/toggle-display.js" />
	<button onclick="toggleHidden(['navigation', 'biography'])">Toggle repeated content</button>
	<nav id="navigation">
		<h1>Contents</h1>
		<!-- list of links to each chapter -->
	</nav>
	<aside id="biography">
		<h1>About the authors</h1>
		<!-- short biography of the author and translator -->
	</aside>
	<main>
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Passed Example 3

The [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of both the complementary and the navigational [sections of repeated content][section of repeated content] can be toggled on and off, each of them by a different [user interface component][].

```html
<html>
	<script src="../test-assets/block-collapsible-3e12e1/toggle-display.js" />
	<a href="#" onclick="toggleHidden('navigation')">Toggle table of content</a>
	<button onclick="toggleHidden('biography')">Toggle extra content</button>
	<nav id="navigation">
		<h1>Contents</h1>
		<!-- list of links to each chapter -->
	</nav>
	<aside id="biography">
		<h1>About the authors</h1>
		<!-- short biography of the author and translator -->
	</aside>
	<main>
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Passed Example 4

The [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of the navigational [section of repeated content][] can be toggled on and off by the link at the start of the document.

```html
<html>
	<head>
		<link rel="stylesheet" href="../test-assets/block-collapsible-3e12e1/styles.css" />
		<script src="../test-assets/block-collapsible-3e12e1/toggle-display.js" />
	</head>
	<a href="#" onclick="toggleVisibility('navigation'); toggleAriaHidden('navigation')">Toggle table of content</a>
	<nav id="navigation">
		<h1>Contents</h1>
		<!-- list of links to each chapter -->
	</nav>
	<main>
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

### Failed

#### Failed Example 1

There is no [user interface component][] to toggle the navigational [section of repeated content].

```html
<html>
	<nav id="navigation">
		<h1>Contents</h1>
		<!-- list of links to each chapter -->
	</nav>
	<main>
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example 2

The [user interface component][] to toggle the navigational [section of repeated content][] is not [visible][].

```html
<html>
	<script src="../test-assets/block-collapsible-3e12e1/toggle-display.js" />
	<a href="#" style="position: absolute; top: -999px" onclick="toggleHidden('navigation')">Toggle table of content</a>
	<nav id="navigation">
		<h1>Contents</h1>
		<!-- list of links to each chapter -->
	</nav>
	<main>
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example 3

The [user interface component][] to toggle the navigational [section of repeated content][] is not [included in the accessibility tree][].

```html
<html>
	<script src="../test-assets/block-collapsible-3e12e1/toggle-display.js" />
	<a href="#" aria-hidden="true" onclick="toggleHidden('navigation')">Toggle table of content</a>
	<nav id="navigation">
		<h1>Contents</h1>
		<!-- list of links to each chapter -->
	</nav>
	<main>
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example 4

The [user interface component][] only toggles the [visibility][visible] of the navigational [section of repeated content][], not its [inclusion in the accessibility tree][included in the accessibility tree].

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<link rel="stylesheet" href="../test-assets/block-collapsible-3e12e1/styles.css" />
		<script src="../test-assets/block-collapsible-3e12e1/toggle-display.js" />
	</head>
	<a href="#" onclick="toggleVisibility('navigation')">Toggle table of content</a>
	<nav id="navigation">
		<h1>Contents</h1>
		<!-- list of links to each chapter -->
	</nav>
	<main>
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

#### Failed Example 5

The [user interface component][] only toggles the [inclusion in the accessibility tree][included in the accessibility tree] of the navigational [section of repeated content][], not its [visibility][visible].

```html
<html lang="en">
	<script src="../test-assets/block-collapsible-3e12e1/toggle-display.js" />
	<a href="#" onclick="toggleAriaHidden('navigation')">Toggle table of content</a>
	<nav id="navigation">
		<h1>Contents</h1>
		<!-- list of links to each chapter -->
	</nav>
	<main>
		<h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</span></h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</main>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The [document element][] of this [document][] is not an `html` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[document element]: https://dom.spec.whatwg.org/#document-element 'Definition of document element'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[landmark]: https://www.w3.org/TR/wai-aria-1.1/#landmark 'List of landmark roles'
[tech scr28]: https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28 'Technique SCR28: Using an expandable and collapsible menu to bypass block of content'
[section of content]: #section-of-content 'Definition of section of content'
[section of repeated content]: #section-of-repeated-content 'Definition of section of repeated content'
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components 'Definition of user interface component'
[visible]: #visible 'Definition of visible'
[html web page]: #web-page-html 'Definition of web page (HTML)'