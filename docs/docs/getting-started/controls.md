---
title: Controls
sidebar_label: Controls
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Controls are interactable elements inside the player that can be used to either "control" the player 
and media playback like a play/pause button, or to perform some arbitrary action in relation to the 
media like a share button. So far we've seen that Vime comes with a default set of controls as part of 
the [default UI](../components/ui/default-ui), but how do we go about customizing them? Let's 
start by seeing how we can pass options into the [default controls](../components/ui/controls/default-controls)
and then we'll create our own...

:::info
See the [DefaultControls](../components/ui/controls/default-controls) component documentation for 
more information on what properties you can pass in.
:::

<Tabs
  groupId="framework"
  defaultValue="html"
  values={[
  { label: 'HTML', value: 'html' },
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Stencil', value: 'stencil' },
  { label: 'Angular', value: 'angular' }
]}>

<TabItem value="html">

```html {7-10} title="player.html"
<vime-player>
  <!-- ... -->
 
  <!-- We turn off the controls that come with the default UI. -->
  <vime-default-ui no-controls>
    <!-- We setup the default controls and pass in any options.  -->
    <vime-default-controls 
      hide-on-mouse-leave 
      active-duration="2000"
    ></vime-default-controls>
  </vime-default-ui>
</vime-player>
```

</TabItem>

<TabItem value="react">

```tsx {12-15} title="Player.tsx"
import React from 'react';
import { VimePlayer, VimeDefaultUi, VimeDefaultControls } from '@vime/react';

function Player() {
  return (
    <VimePlayer>
      {/* ... */}

      {/* We turn off the controls that come with the default UI. */}
      <VimeDefaultUi noControls>
        {/* We setup the default controls and pass in any options. */}
        <VimeDefaultControls
          hideOnMouseLeave
          activeDuration={2000}
        />
      </VimeDefaultUi>
    </VimePlayer>
  );
}
```

</TabItem>

<TabItem value="vue">

```html {8-11} title="Player.vue"
<template>
  <VimePlayer>
    <!-- ... -->

    <!-- We turn off the controls that come with the default UI. -->
    <VimeDefaultUi noControls>
      <!-- We setup the default controls and pass in any options. -->
      <VimeDefaultControls
        hideOnMouseLeave
        :activeDuration="2000"
      />
    </VimeDefaultUi>
  </VimePlayer>
</template>

<script>
  import { VimePlayer, VimeDefaultUi, VimeDefaultControls } from '@vime/vue';

  export default {
    components: {
      VimePlayer,
      VimeDefaultUi,
      VimeDefaultControls,
    },
  };
</script>
```

</TabItem>

<TabItem value="svelte">

```html {7-10} title="Player.svelte"
<VimePlayer>
  <!-- ... -->

  <!-- We turn off the controls that come with the default UI. -->
  <VimeDefaultUi noControls>
    <!-- We setup the default controls and pass in any options. -->
    <VimeDefaultControls
      hideOnMouseLeave
      activeDuration={2000}
    />
  </VimeDefaultUi>
</VimePlayer>

<script lang="ts">
  import { VimePlayer, VimeDefaultUi, VimeDefaultControls } from '@vime/svelte';
</script>
```

</TabItem>

<TabItem value="stencil">

```tsx {12-15} title="player.tsx"
class Player {
  // ...

  render() {
    return (
      <vime-player>
        {/* ... */}

        {/* We turn off the controls that come with the default UI. */}
        <vime-default-ui noControls>
          {/* We setup the default controls and pass in any options.  */}
          <vime-default-controls 
            hideOnMouseLeave
            activeDuration={2000}
          />
        </vime-default-ui>
      </vime-player>
    );
  }
}
```

</TabItem>

<TabItem value="angular">

```html {7-10} title="player.html"
<vime-player>
  <!-- ... -->

  <!-- We turn off the controls that come with the default UI. -->
  <vime-default-ui no-controls>
    <!-- We setup the default controls and pass in any options.  -->
    <vime-default-controls 
      hide-on-mouse-leave 
      [active-duration]="2000"
    ></vime-default-controls>
  </vime-default-ui>
</vime-player>
```

</TabItem>
    
</Tabs>

Glorious! Here's the result 🥁 ...

:::tip
Start playing the video and move your mouse outside of the player, the controls should now dissapear
straight away.
:::

import { DefaultControlsPlayer } from './components/DefaultControlsPlayer';

<DefaultControlsPlayer />
<br />

So that's neat but sometimes the default set of controls doesn't fit your use case and you need 
to create your own. You can create your own set of controls similarly to how we created a 
custom UI in which we utilized predefined Vime UI components, and created our own when needed. Since 
the controls are part of the UI, we can look through the components in the `Components > UI` section 
in the sidebar (on your left) and pick and use whatever we need. The predefined controls are available 
in the `Components > UI > Controls` section. Using some of those components let's extend the default 
UI with our own set of controls...

:::info
The example below is only using predefined Vime controls, see the [Control](../components/ui/controls/control) 
component documentation for an example of how to create a custom control.
:::

<Tabs
  groupId="framework"
  defaultValue="html"
  values={[
  { label: 'HTML', value: 'html' },
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Stencil', value: 'stencil' },
  { label: 'Angular', value: 'angular' }
]}>

<TabItem value="html">

```html {6-23} title="player.html"
<vime-player>
  <!-- ... -->
  
  <!-- We turn off the controls that come with the default UI. -->
  <vime-default-ui no-controls>
    <vime-scrim></vime-scrim>

    <vime-controls full-width pin="topLeft">
      <vime-control-spacer></vime-control-spacer>
      <vime-mute-control><vime-mute-control>
    </vime-controls>

    <vime-controls pin="center">
      <vime-playback-control 
        hide-tooltip 
        style="--vm-control-scale: 1.7;"
      ></vime-playback-control>
    </vime-controls>
    
    <vime-controls full-width pin="bottomLeft">
      <vime-control-spacer></vime-control-spacer>
      <vime-time-progress></vime-time-progress>
    </vime-controls>
  </vime-default-ui>
</vime-player>
```

</TabItem>

<TabItem value="react">

```tsx {20-34} title="Player.tsx"
import React from 'react';
import { 
  VimePlayer,
  VimeDefaultUi, 
  VimeScrim,
  VimeControls,
  VimeControlSpacer,
  VimeMuteControl,
  VimePlaybackControl,
  VimeTimeProgress,
} from '@vime/react';

function Player() {
  return (
    <VimePlayer>
      {/* ... */}

      {/* We turn off the controls that come with the default UI. */}
      <VimeDefaultUi noControls>
        <VimeScrim />

        <VimeControls fullWidth pin="topLeft">
          <VimeControlSpacer />
          <VimeMuteControl />
        </VimeControls>

        <VimeControls pin="center">
          <VimePlaybackControl hideTooltip style={{ '--vm-control-scale': 1.7 }} />
        </VimeControls>
        
        <VimeControls fullWidth pin="bottomLeft">
          <VimeControlSpacer />
          <VimeTimeProgress />
        </VimeControls>
      </VimeDefaultUi>
    </VimePlayer>
  );
}
```

</TabItem>

<TabItem value="vue">

```html {7-21} title="Player.vue"
<template>
  <VimePlayer>
    <!-- ... -->

    <!-- We turn off the controls that come with the default UI. -->
    <VimeDefaultUi noControls>
      <VimeScrim />

      <VimeControls fullWidth pin="topLeft">
        <VimeControlSpacer />
        <VimeMuteControl />
      </VimeControls>

      <VimeControls pin="center">
        <VimePlaybackControl hideTooltip />
      </VimeControls>
      
      <VimeControls fullWidth pin="bottomLeft">
        <VimeControlSpacer />
        <VimeTimeProgress />
      </VimeControls>
    </VimeDefaultUi>
  </VimePlayer>
</template>

<script>
  import { 
    VimePlayer,
    VimeDefaultUi,
    VimeScrim,
    VimeControls,
    VimeControlSpacer,
    VimeMuteControl,
    VimePlaybackControl,
    VimeTimeProgress,
  } from '@vime/vue';

  export default {
    components: {
      VimePlayer,
      VimeDefaultUi,
      VimeScrim,
      VimeControls,
      VimeControlSpacer,
      VimeMuteControl,
      VimePlaybackControl,
      VimeTimeProgress,
    },
  };
</script>

<style>
  vime-playback-control {
    --vm-control-scale: 1.7;
  }
</style>
```

</TabItem>

<TabItem value="svelte">

```html {6-20} title="Player.svelte"
<VimePlayer>
  <!-- ... -->

  <!-- We turn off the controls that come with the default UI. -->
  <VimeDefaultUi noControls>
    <VimeScrim />

    <VimeControls fullWidth pin="topLeft">
      <VimeControlSpacer />
      <VimeMuteControl />
    </VimeControls>

    <VimeControls pin="center">
      <VimePlaybackControl hideTooltip />
    </VimeControls>
    
    <VimeControls fullWidth pin="bottomLeft">
      <VimeControlSpacer />
      <VimeTimeProgress />
    </VimeControls>
  </VimeDefaultUi>
</VimePlayer>

<script lang="ts">
  import { 
    VimePlayer,
    VimeDefaultUi,
    VimeScrim,
    VimeControls,
    VimeControlSpacer,
    VimeMuteControl,
    VimePlaybackControl,
    VimeTimeProgress,
  } from '@vime/svelte';
</script>

<style>
  :global(vime-playback-control) {
    --vm-control-scale: 1.7;
  }
</style>
```

</TabItem>

<TabItem value="stencil">

```tsx {11-28} title="player.tsx"
class Player {
  // ...

  render() {
    return (
      <vime-player>
        {/* ... */}

        {/* We turn off the controls that come with the default UI. */}
        <vime-default-ui noControls>
          <vime-scrim />

          <vime-controls fullWidth pin="topLeft">
            <vime-control-spacer />
            <vime-mute-control />
          </vime-controls>

          <vime-controls pin="center">
            <vime-playback-control 
              hideTooltip 
              style={{ '--vm-control-scale': '1.7' }}
            />
          </vime-controls>
          
          <vime-controls fullWidth pin="bottomLeft">
            <vime-control-spacer />
            <vime-time-progress />
          </vime-controls>
        </vime-default-ui>
      </vime-player>
    );
  }
}
```

</TabItem>

<TabItem value="angular">

```html {6-23} title="player.html"
<vime-player>
  <!-- ... -->

  <!-- We turn off the controls that come with the default UI. -->
  <vime-default-ui no-controls>
    <vime-scrim></vime-scrim>

    <vime-controls full-width pin="topLeft">
      <vime-control-spacer></vime-control-spacer>
      <vime-mute-control><vime-mute-control>
    </vime-controls>

    <vime-controls pin="center">
      <vime-playback-control 
        hide-tooltip 
        style="--vm-control-scale: 1.7;"
      ></vime-playback-control>
    </vime-controls>
    
    <vime-controls full-width pin="bottomLeft">
      <vime-control-spacer></vime-control-spacer>
      <vime-time-progress></vime-time-progress>
    </vime-controls>
  </vime-default-ui>
</vime-player>
```

</TabItem>
    
</Tabs>

Glorious! Here's the result 🥁 ...

import { CustomControlsPlayer } from './components/CustomControlsPlayer';

<CustomControlsPlayer />
<br />

Of course the example hasn't been styled and needs more work but we'll leave that to you, and we'll 
learn more about it in the [Styling](./styling) guide. To summarize we've seen how to customize 
the default controls via properties, and how to extend the default UI with our own sets of 
controls. If we wanted to build our own UI from scratch, we could take the last example and place 
it inside `VimeUi` instead of `VimeDefaultUi`, and we'd also need to add the 
[`VimeIcons`](../components/ui/icons) component to load the default icons. From here you should be 
able to easily put together your own controls. Also if you missed it, the [Control](../components/ui/controls/control)
component documentation re-creates the playback control, to demonstrate how you could create a 
completely custom control in your library/framework.

🚂 &nbsp;Let's move onto [settings!](./settings)