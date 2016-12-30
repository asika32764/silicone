# Silicone.css

A simple css helper to use with every css frameworks.

## Getting Started

[Download](https://github.com/asika32764/silicone/tree/master/dist) latest version or install by bower:

``` bash
bower install silicone
```

Then just include it by HTML link:

``` html
<link rel="stylesheet" href="css/silicone.min.css" />
```

## Vertical Align

``` html
<div class="vertical-align" style="height: 200px">
    <div class="vertical-align-middle">
        Content
    </div>
</div>
```

This is an full example.

``` html
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <h2>Middle</h2>
            <div class="well vertical-align" style="height: 200px">
                <div class="vertical-align-middle">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <h2>Bottom</h2>
            <div class="well vertical-align" style="height: 200px">
                <div class="vertical-align-bottom">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
```

![p-2016-12-31-001](https://cloud.githubusercontent.com/assets/1639206/21569521/88cad84c-cef8-11e6-83c6-32e5a01f6066.jpg)

## Clearfix

Use `float-group` class to wrap elements, this name is more semantic.

``` html
<div class="float-group">
    <div class="pull-left"></div>
    <div class="pull-left"></div>
    <div class="pull-left"></div>
</div>
```

Or use classic `clearfix` class.

``` html
<div>
    <div class="pull-left"></div>
    <div class="pull-left"></div>
    <div class="pull-left"></div>

    <div class="clearfix"></div>
</div>
```

## Height

A simple class set to set `vh` height to elements.

- `.height-xs` => 20vh
- `.height-sm` => 40vh
- `.height-md` => 60vh
- `.height-lg` => 80vh
- `.height-full` => 100vh

## Background Mask

bg-mask class helps us set a background mask to element.

This example use `bg-mask` to create black ::before element and `bg-mask-op-5` add opacity 0.5 to overlay
the background image. And the `bg-mask-content` make sure content text will float on the top.

``` html
<div class="bg-mask bg-mask-op-5" style="background-image: url(http://i.imgur.com/6FWMGdH.jpg);">
    <div class="bg-mask-content">
        <h1 style="color: white">Hello World</h1>
    </div>
</div>
```

The full example is:

``` html
<div class="bg-mask bg-mask-op-5 text-center bg-cover bg-center-center"
    style="background-image: url(http://i.imgur.com/6FWMGdH.jpg);">
    <div class="height-md vertical-align">
        <div class="vertical-align-middle bg-mask-content">
            <h1 style="color: white">Hello World</h1>
        </div>
    </div>
</div>
```

![p-2016-12-31-002](https://cloud.githubusercontent.com/assets/1639206/21569625/7f16f3f2-cef9-11e6-881b-303de111a15e.jpg)

The `bg-mask-op-*` support 1 to 9.

`bg-cover` is a helpful class to set `background-size: cover`.

## Background Position

You can use `.bg-{position}` classes to set background position.

- `.bg-center-center`
- `.bg-top`
- `.bg-middle`
- `.bg-bottpm`
- `.bg-left`
- `.bg-center`
- `.bg-right`

## Margin and Padding

Margin and Padding is a fork of [less-space](http://aslanbakan.com/en/blog/less-space-responsive-css-margin-and-padding-helper-classes/) library.

``` html
<div class="container">
  <div class="row">
    <div id="content" class="col-md-8 xs-mb-40 md-mb-20">
    </div><!-- content -->
    <div id="sidebar" class="col-md-4 xs-mb-40 md-mb-20">
    </div><!-- sidebar -->
  </div><!-- "row" -->
</div><!-- "container" -->
```

You don't need to know Bootstrap or any other CSS Framework to understand `xs-mb-20` actually does.
Let's examine these 3 parted class with a visual diagram.

![](http://i.imgur.com/bdWcX2Z.png)

### Red area:

This section defines which viewport that element belongs right now.

- `xs` (extra small: 480px) Mobile phones and bigger screen sizes..
xs represents global viewport size by the way. If we want margin or padding values stay same on all screen sizes, we use xs to achieve that.
- `sm` (small: 768px) Tablet devices and bigger screens.
- `md` (medium: 992px) Desktop and bigger screens
- `lg` (large: 1200px) Extra wide viewport sizes.

### Blue area

This section defines the attribute that you want to use, either `margin` or `padding`

- `p` padding
- `pt` padding-top
- `pr` padding-right
- `pb` padding-bottom
- `pl` padding-left
- `m` margin
- `mt` margin-top
- `mr` margin-right
- `mb` margin-bottom
- `ml` margin-left

### Green area

This is the integer section that you want to set.

- It could be zero "0"
- Only digits.
- Minus values will not be accepted. (I Didn't define them consider its using rate.)
- Currently supports: 5, 10, 15, 20, 30, 40, 50, 75, 100
