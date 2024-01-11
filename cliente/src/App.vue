<script setup>
</script>

<template>
  <div id="app">
    <div>
      <b-navbar toggleable="md" type="dark" variant="dark">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>

            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="row mt-1">
      <div class="col-3">
        <ul style="list-style: none;">
          <li class="mt-1"><b-button block variant="primary">Block Level Button</b-button></li>
          <li class="mt-1"><b-button block variant="primary">Block Level Button</b-button></li>
          <li class="mt-1"><b-button block variant="primary">Block Level Button</b-button></li>
          <li class="mt-1"><b-button block variant="primary">Block Level Button</b-button></li>
          <li class="mt-1"><b-button block variant="primary">Block Level Button</b-button></li>
          <li class="mt-1"><b-button block variant="primary">Block Level Button</b-button></li>
          <li>
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-9">
        <div>
          <div>
            <b-card-group deck>
              <b-card border-variant="primary" header="Primary" header-bg-variant="primary" header-text-variant="white"
                align="center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>

              <b-card border-variant="secondary" header="Secondary" header-border-variant="secondary" align="center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>

              <b-card border-variant="success" header="Success" align="center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>
            </b-card-group>
          </div>
          <div class="mt-3">
            <b-card-group deck>
              <b-card border-variant="info" header="Info" align="center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>

              <b-card border-variant="warning" header="Warning" header-bg-variant="transparent" align="center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>

              <b-card border-variant="danger" header="Danger" header-border-variant="danger" header-text-variant="danger"
                align="center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>
            </b-card-group>
          </div>
          <div class="mt-3">
            <b-card-group deck class="mb-3">
              <b-card border-variant="light" header="Light" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>

              <b-card border-variant="dark" header="Dark" align="center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>