<!-- サイドバー -->
<div class="sidebar">

<!-- ウィジェットエリア（サイドバー新着記事の上） -->
<div class="sidebox">
<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('サイドバー新着記事の上') ) : ?>
<?php endif; ?>
</div>
<!-- /ウィジェットエリア（サイドバー新着記事の上） -->

<!-- 新着記事 -->
<div class="sidebox-new">
<div class="widget-title">新着記事</div>
<ul>
<?php query_posts("showposts=5"); ?>
<?php if(have_posts()): while(have_posts()): the_post(); ?>
<li><table class="similar-side"><tr><th><a href="<?php the_permalink(); ?>"><?php
if ( has_post_thumbnail() ) the_post_thumbnail(array(420,280));
else echo '<img src="'.get_template_directory_uri().'/images/noimage-420x280.gif" />';
?></a></th>
<td><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"> <?php the_title(); ?></a></td></tr></table></li>
<?php endwhile; else: ?>
<li>記事はありません</li>
<?php endif; ?>
<?php wp_reset_query(); ?>
</ul>
</div>
<!-- / 新着記事 -->

<!-- ウィジェットエリア（サイドバー新着記事の下） -->
<div class="sidebox">
<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('サイドバー新着記事の下') ) : ?>
<?php endif; ?>
</div>
<!-- /ウィジェットエリア（サイドバー新着記事の下） -->

<!-- ウィジェットエリア（サイドバー最下部 PC・スマホ切り替え） -->
<?php if (wp_is_mobile()) :?>
<!-- スマホ表示エリア -->
<div class="sidebox">
<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('サイドバー最下部（モバイル専用）') ) : ?>
<?php endif; ?>
</div>
<!-- / スマホ表示エリア -->
<?php else: ?>
<!-- パソコン表示エリア -->
<div class="sidebox">
<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('サイドバー最下部（PC専用）') ) : ?>
<?php endif; ?>
</div>
<!-- / パソコン表示エリア -->
<?php endif; ?>
<!-- / ウィジェットエリア（サイドバー最下部 PC・スマホ切り替え） -->

</div>
<!-- /  サイドバー  -->