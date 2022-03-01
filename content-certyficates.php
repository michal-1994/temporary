<?php
    $src = get_field('duze_zdjecie_certyfikatu');
?>

<div id="post-<?php the_ID(); ?>" <?php post_class(); ?> data-fancybox="gallery" data-caption="<?php the_field('tytul_certyfikatu');?>" data-src="<?php echo $src['sizes']['large']; ?>">
    <img src="<?php echo $src['sizes']['medium']; ?>" alt="<?php the_field('tytul_certyfikatu');?>" title="<?php the_field('tytul_certyfikatu');?>">
</div>