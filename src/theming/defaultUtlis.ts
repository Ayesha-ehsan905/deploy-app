const defaultUtlis ={
    m: (value) => ({
        margin: value,
      }),
      mt: (value) => ({
        marginTop: value,
      }),
      mr: (value) => ({
        marginRight: value,
      }),
      mb: (value) => ({
        marginBottom: value,
      }),
      ml: (value) => ({
        marginLeft: value,
      }),
      mx: (value) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value) => ({
        marginTop: value,
        marginBottom: value,
      }),

      p: (value) => ({
        padding: value,
      }),
      pt: (value) => ({
        paddingTop: value,
      }),
      pr: (value) => ({
        paddingRight: value,
      }),
      pb: (value) => ({
        paddingBottom: value,
      }),
      pl: (value) => ({
        paddingLeft: value,
      }),
      
      br: (value) => ({
        borderRadius: value,
      }),
      ft: (value) => ({
        fontSize: value,
      }),
};

export default defaultUtlis;