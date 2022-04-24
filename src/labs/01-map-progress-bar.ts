import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const text = document.createElement('div');
text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sagittis sapien. Proin faucibus mauris iaculis sapien imperdiet iaculis. Duis euismod sapien tempor placerat mollis. Phasellus sodales hendrerit nulla, eu dignissim orci cursus eu. Fusce ut sem vel mauris vestibulum congue. Nunc finibus nunc ac dolor rutrum tempus. Nulla urna enim, tincidunt vel nulla sit amet, dignissim maximus mauris. Integer sed dui ut orci luctus molestie vitae sit amet velit. Nulla maximus vulputate ante et pellentesque. Etiam porttitor sed dui ac luctus. Donec ultricies nulla vitae porta tristique. In vestibulum sem at arcu rutrum auctor et sit amet dolor. Praesent orci libero, finibus dapibus convallis lobortis, hendrerit eu elit. Pellentesque consectetur magna ut mi posuere, ut ultrices augue ultricies. Nulla eu massa at augue vestibulum mattis.
<br/><br/>
Vestibulum molestie turpis in ipsum varius porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis ullamcorper enim. Quisque at dui eget enim sagittis aliquet. Phasellus venenatis id magna vel vestibulum. Nullam eu libero mi. Quisque justo elit, vestibulum ac ligula quis, hendrerit volutpat dolor. Vestibulum et mi in nisi scelerisque pulvinar. Vestibulum a arcu sit amet turpis scelerisque condimentum non euismod sapien. Curabitur sit amet elit dignissim, eleifend mauris porttitor, rutrum tortor. Pellentesque quis feugiat neque, sed tristique libero. Proin eget magna neque. Nam sed augue ac tellus ultrices lacinia in ac velit.
<br/><br/>
In et urna aliquam, auctor turpis eget, lacinia turpis. Vivamus ornare lorem ac massa scelerisque rhoncus. Vivamus tincidunt magna vitae tellus blandit efficitur. Vivamus et elit eu ligula semper interdum ut et magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eget sem et mauris rhoncus feugiat. Nunc vitae maximus nisl, non aliquet magna. Phasellus at tristique enim.
<br/><br/>
Curabitur in consectetur nisi, sed maximus tellus. Ut iaculis elit neque. Ut ut nisi venenatis, rutrum purus a, lobortis orci. Donec ut rutrum est. Phasellus commodo ac urna sed condimentum. Curabitur congue bibendum commodo. Suspendisse potenti. Cras molestie sed lorem id pharetra. Nam dapibus quam id lorem fermentum, id lacinia lorem consectetur. Suspendisse pulvinar tempus risus id pretium. Vivamus urna leo, pretium nec lorem sit amet, aliquet dapibus ante. Nulla pulvinar varius ligula sit amet aliquet. Donec tempus sodales mauris non sodales. Phasellus finibus nulla scelerisque neque euismod, dictum faucibus neque convallis. Pellentesque ultrices eleifend arcu, id dictum est varius vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
<br/><br/
Nunc molestie semper augue, at congue massa faucibus id. Suspendisse potenti. In lectus nibh, semper fringilla pretium a, dapibus vel eros. Etiam tincidunt luctus nisi, id consequat eros scelerisque in. Fusce semper pellentesque tellus ac ultricies. Quisque magna urna, pharetra nec fermentum vitae, sagittis a ipsum. Maecenas luctus sem in vehicula sollicitudin. Cras et fermentum sapien, ac posuere orci. Praesent sagittis at mauris a sodales. Curabitur ligula est, maximus et vestibulum id, efficitur vel arcu. Mauris ex lorem, molestie quis nibh eu, aliquet sodales arcu. Quisque et ultrices ante.`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const scroll$ = fromEvent(document, 'scroll');
scroll$.subscribe(console.log);

const calculateScrollPercentage = (event): number => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const progress$ = scroll$
  .pipe(map(calculateScrollPercentage), tap(console.log))
  .subscribe((percentage) => {
    progressBar.style.width = `${percentage}%`;
  });
