const JsonPreview = ({ document }: { document: any }) => (
    <>
      <h1>JSON Data for "{document.published.title}"</h1>
      <pre>{JSON.stringify(document.published, null, 2)}</pre><br/>
    </>
  );
  
  export default JsonPreview;