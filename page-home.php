<?php
/**
 * Template Name: Home
 */

get_header();
?>

<section class="services" id="services-section">
    <div class="container">
        <div class="section__title">
            <h3>Usługi</h3>
            <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies ligula quis magna aliquet congue.</p> -->
        </div>

        <div class="wrapper">

            <?php
                $args = array(
                    'post_type'      => 'uslugi',
                    'posts_per_page' => 3
                );
                $loop = new WP_Query($args);
                while ( $loop->have_posts() ) {
                    $loop->the_post();

                    get_template_part( 'template-parts/content', 'services' );
                }
            ?>

        </div>

        <div class="section__buttons">
            <a href="<?php echo site_url(); ?>/o-mnie/" title="O mnie" class="btn">O mnie <i class="icon-right-small"></i></a>
        </div>

    </div>
</section>

<section class="projects">
    <div class="container">
        <div class="section__title">
            <h3>Projekty</h3>
            <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies ligula quis magna aliquet congue.</p> -->
        </div>

        <div class="projects__grid">

            <?php
                benita_show_every_project('social');
                benita_show_every_project('produkty');
                benita_show_every_project('reklama');
            ?>

        </div>

        <div class="section__buttons">
            <a href="<?php echo site_url(); ?>/projekty/" title="Zobacz więcej" class="btn">Więcej projektów <i class="icon-right-small"></i></a>
        </div>

    </div>
</section>

<section class="reviews">
    <div class="container">

        <div id="owl-carousel" class="owl-carousel">
            <?php
                $args = array(
                    'post_type'      => 'opinie',
                    'posts_per_page' => -1
                );
                $loop = new WP_Query($args);
                while ( $loop->have_posts() ) {
                    $loop->the_post();

                    get_template_part( 'template-parts/content', 'reviews' );
                }
            ?>
        </div>

    </div>
</section>

<?php
get_footer();